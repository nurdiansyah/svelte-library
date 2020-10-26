<script context="module" lang="ts">
  type Vertical = "top" | "center" | "bottom" | number;
  type Horizontal = "left" | "center" | "right" | number;
  type Position = { vertical: Vertical; horizontal: Horizontal };
  type AnchorPosition = { top: number; left: number };
  type PositionStyle = { top?: string; left?: string; transformOrigin?: string };
  type AnchorReference = "anchorEl" | "anchorPosition" | "none";
  type ElRect = Pick<DOMRect, "height" | "width">;
  type AnchorElement = HTMLElement | (() => HTMLElement) | undefined;

  function getOffsetTop(rect: ElRect, vertical: Vertical) {
    let offset = 0;
    if (typeof vertical === "number") {
      offset = vertical;
    } else if (vertical === "center") {
      offset = rect.height / 2;
    } else if (vertical === "bottom") {
      offset = rect.height;
    }
    return offset;
  }

  export function getOffsetLeft(rect: ElRect, horizontal: Horizontal) {
    let offset = 0;

    if (typeof horizontal === "number") {
      offset = horizontal;
    } else if (horizontal === "center") {
      offset = rect.width / 2;
    } else if (horizontal === "right") {
      offset = rect.width;
    }

    return offset;
  }

  export function getTransformOriginValue(transform: Position) {
    return [transform.horizontal, transform.vertical].map((n) => (typeof n === "number" ? `${n}px` : n)).join(" ");
  }

  function getScrollParent(parent?: HTMLElement, child?: HTMLElement) {
    let element = child;
    let scrollTop = 0;

    while (element && element !== parent) {
      element = element.parentElement || undefined;
      element && (scrollTop += element.scrollTop);
    }
    return scrollTop;
  }

  function getAnchorEl(anchorEl: AnchorElement) {
    return typeof anchorEl === "function" ? anchorEl() : anchorEl;
  }
</script>

<script lang="ts">
  import { onDestroy, onMount } from "svelte";
  import { element } from "svelte/internal";
  import Modal from "./Modal.svelte";
  import Paper from "../surfaces/Paper.svelte";
  import { ownerDocument, ownerWindow } from "./dom";
  import Person from "../../icons/Person.svelte";
  import { debounce } from "./debounce";

  // state®
  let isMounted: boolean = false;
  let anchorOffset: { top: number; left: number };
  let contentAnchorOffset: number;
  let paperNode: HTMLElement | undefined;

  // props
  export let anchorEl: AnchorElement = undefined;
  export let anchorOrigin: Position = { vertical: "top", horizontal: "left" };
  export let anchorPosition: AnchorPosition | undefined = undefined;
  export let anchorReference: AnchorReference = "anchorEl";
  export let container: HTMLElement | undefined = undefined;
  export let elevation: number = 8;
  export let getContentAnchorEl: ((el: HTMLElement) => HTMLElement) | undefined = undefined;
  export let marginThreshold: number = 16;
  export let onEnter: ((e?: Event) => void) | undefined = undefined;
  export let onEntering: ((e?: Event) => void) | undefined = undefined;
  export let onEntered: ((e?: Event) => void) | undefined = undefined;
  export let onExit: ((e?: Event) => void) | undefined = undefined;
  export let onExiting: ((e?: Event) => void) | undefined = undefined;
  export let onExited: ((e?: Event) => void) | undefined = undefined;
  export let onClose: ((e?: Event) => void) | undefined = undefined;
  export let open: boolean;
  export let paperProps: Record<string, any> = {};
  export let transformOrigin: Position = { vertical: "top", horizontal: "left" };

  // Return posisi top atau left offset.
  // mengaitkan ke element (atau ke body apapbila anchor element tidak tersedia)
  function getAnchorOffset(contentAnchorOffset): AnchorPosition {
    if (anchorReference === "anchorPosition") {
      if (process.env.NODE_ENV !== "production") {
        if (!anchorPosition) {
          console.error(
            "membutuhkan set `anchorPosition` prop ketika menggunakan " +
              `< Popover anchorReference="anchorPosition" />.`
          );
        }
      }
      return anchorPosition || { top: 0, left: 0 };
    }
    const resolveAnchorEl = getAnchorEl(anchorEl);

    // if anchor element tidak tersedia, gunakan parent body sebagai default
    const anchorElement =
      resolveAnchorEl && resolveAnchorEl.nodeType === 1 ? resolveAnchorEl : ownerDocument(paperNode).body;
    const anchorRect = anchorElement.getBoundingClientRect();

    if (process.env.NODE_ENV !== "production") {
      const box = anchorElement.getBoundingClientRect();
      if (process.env.NODE_ENV !== "test" && box.top === 0 && box.left === 0 && box.right === 0 && box.bottom === 0) {
        console.warn([
          [
            "`anchorEl` prop yg disediankan oleh komponen tidak valid.",
            "anchor element akan menjadi bagian dari document layout.",
            "Pastikan  kalau element ini di dalam document atau display diset none."
          ].join("\n")
        ]);
      }
    }

    const anchorVertical: Vertical = contentAnchorOffset === 0 ? anchorOrigin.vertical : "center";
    return {
      top: anchorRect.top + getOffsetTop(anchorRect, anchorVertical),
      left: anchorRect.left + getOffsetLeft(anchorRect, anchorOrigin.horizontal)
    };
  }

  function getContentAnchorOffset(element: HTMLElement) {
    let contentAnchorOffset = 0;
    if (getContentAnchorEl && anchorReference === "anchorEl") {
      const contentAnchorEl = getContentAnchorEl(element);
      if (getContentAnchorEl && element.contains(contentAnchorEl)) {
        const scrollTop = getScrollParent(element, contentAnchorEl);
        contentAnchorOffset = contentAnchorEl.offsetTop + contentAnchorEl.clientHeight / 2 - scrollTop || 0;
      }

      // kalau tidak sama dg default
      if (process.env.NODE_ENV !== "production") {
        if (anchorOrigin.vertical !== "top") {
          console.error(
            [
              "tidak dapat mengganti nilai default properties `anchorOrigin.vertical` ",
              "ketika terdapat properties `getContentAnchorEl` ke komponen popover.",
              "hanya salah satu yang dipilih dari properties tersebut.",
              "set nilai `getContentAnchorEl` dg `undefined` atau biarkan `anchorOrigin.vertical` tidak berubah"
            ].join("\n")
          );
        }
      }
    }
    return contentAnchorOffset;
  }

  function getTransformOrigin(elemRect: ElRect, contentAnchorOffset: number = 0) {
    return {
      vertical: getOffsetTop(elemRect, transformOrigin.vertical) + contentAnchorOffset,
      horizontal: getOffsetLeft(elemRect, transformOrigin.horizontal)
    };
  }

  function getPositioningStyle(element: HTMLElement): PositionStyle {
    const contentAnchorOffset = getContentAnchorOffset(element);
    const elemRect = { width: element.offsetWidth, height: element.offsetHeight };
    const elemTransformOrigin = getTransformOrigin(elemRect, contentAnchorOffset);
    if (anchorReference === "none") {
      return {
        transformOrigin: getTransformOriginValue(elemTransformOrigin)
      };
    }

    // offset anchoring element
    const anchorOffset = getAnchorOffset(contentAnchorOffset);

    // kalkulasi posisi element
    let top = anchorOffset.top - elemTransformOrigin.vertical;
    let left = anchorOffset.left - elemTransformOrigin.horizontal;
    const bottom = top + elemRect.height;
    const right = left + elemRect.width;

    // parent window dari anchorEl kalau tersedia
    const containerWindow = ownerWindow(getAnchorEl(anchorEl));

    // batas margin window
    const heightThreshold = containerWindow.innerHeight - marginThreshold;
    const widthThreshold = containerWindow.innerWidth - marginThreshold;

    // check vertical
    if (top < marginThreshold) {
      const diff = top - marginThreshold;
      top -= diff;
      elemTransformOrigin.vertical += diff;
    } else if (bottom > heightThreshold) {
      const diff = bottom - heightThreshold;
      top -= diff;
      elemTransformOrigin.vertical += diff;
    }

    // check horizontal
    if (left < marginThreshold) {
      const diff = left - marginThreshold;
      left -= diff;
      elemTransformOrigin.horizontal += diff;
    } else if (right > marginThreshold) {
      const diff = right - marginThreshold;
      left -= diff;
      elemTransformOrigin.horizontal += diff;
    }

    return {
      top: `${Math.round(top)}px`,
      left: `${Math.round(left)}px`,
      transformOrigin: getTransformOriginValue(elemTransformOrigin)
    };
  }

  // handler
  onMount(() => {
    isMounted = true;
    onEnter && onEnter();
    window.addEventListener("resize", handleResize);
  });

  onDestroy(() => {
    onExit && onExit();
    window.removeEventListener("resize", handleResize);
  });

  function handleResize() {
    return debounce(() => {
      setPositioningStyles();
    });
  }

  // reactive

  $: {
    function setPositioningStyles() {
      if (!paperNode) return;
      const positioning = getPositioningStyle(paperNode);
      if (positioning.top) paperNode.style.top = positioning.top;
      if (positioning.left) paperNode.style.left = positioning.left;
      paperNode.style.transformOrigin = positioning.transformOrigin;
    }
    isMounted && open && setPositioningStyles();
  }

  $: container = container || (anchorEl ? ownerDocument(getAnchorEl(anchorEl)).body : undefined);
</script>

<Modal
  {...$$restProps}
  hideBackdrop
  {container}
  class="dbx-popover"
  {onClose}
  {open}
  {onEntered}
  {onEntering}
  {onExited}
  {onExiting}>
  <Paper {paperNode} {elevation} {...paperProps}>
    <slot />
  </Paper>
</Modal>

<style src="./styles/popover.scss" global>
</style>
