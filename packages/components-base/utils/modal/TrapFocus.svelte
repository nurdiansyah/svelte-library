<script context="module" lang="ts">
  export interface Props {
    disableAutoFocus: boolean;
    disableEnforceFocus: boolean;
    disableRestoreFocus: boolean;
    node: HTMLElement | undefined;
    enable: boolean;
    getDoc: () => Document;
    open: boolean;
    onFocus?: (e?: Event) => void;
    onTabChange?: (e?: KeyboardEvent) => void;
  }

  interface Options extends Omit<Props, "node"> {
    sentinelStart: HTMLElement;
    sentinelEnd: HTMLElement;
  }

  function trapFocus(node: HTMLElement, options: Options) {
    let ignoreNextEnforceFocus: boolean;
    let restoreNode: HTMLElement | null;
    let doc: Document;

    function saveToRestore() {
      restoreNode = !open || typeof window == "undefined" ? null : (doc.activeElement as HTMLElement);
    }
    // With Edge, Safari and Firefox, no focus related events are fired when the focused area stops being a focused area
    // e.g. https://bugzilla.mozilla.org/show_bug.cgi?id=559561.
    //
    // The whatwg spec defines how the browser should behave but does not explicitly mention any events:
    // https://html.spec.whatwg.org/multipage/interaction.html#focus-fixup-rule.
    const interval = setInterval(() => {
      contain();
    }, 50);

    function contain(e?: Event) {
      if (options.disableEnforceFocus || !options.enable || ignoreNextEnforceFocus) {
        ignoreNextEnforceFocus = false;
        return;
      }

      if (!node.contains(doc.activeElement)) {
        node.focus();
      }

      options.onFocus && options.onFocus(e);
    }

    function loopFocus(e: KeyboardEvent) {
      // 9 = tab
      if (options.disableEnforceFocus || !options.enable || e.code !== "9") {
        return;
      }

      // Make sure the next tab starts from the right place.
      if (doc.activeElement === node) {
        // We need to ignore the next contain as
        // it will try to move the focus back to the rootRef element.
        ignoreNextEnforceFocus = true;
        if (e.shiftKey) {
          options.sentinelEnd.focus();
        } else {
          options.sentinelStart.focus();
        }
      }
      options.onTabChange && options.onTabChange(e);
    }

    function effect() {
      if (!options.open) {
        return;
      }

      if (!options.disableRestoreFocus) {
        saveToRestore();
      }

      if (!options.disableAutoFocus && node.contains(doc.activeElement)) {
        if (!node.hasAttribute("tabIndex")) {
          if (process.env.NODE_ENV !== "production") {
            console.error(
              [
                "The modal content node does not accept focus.",
                'For the benefit of assistive technologies, the tabIndex of the node is being set to "-1".'
              ].join("\n")
            );
          }
          node.setAttribute("tabIndex", "-1");
        }
        node.focus();
      }

      doc.addEventListener("focus", contain, true);
      doc.addEventListener("keydown", loopFocus, true);
    }

    return {
      update(_options: Options) {
        options = _options;
        doc = options.getDoc();
        effect();
      },
      destroy() {
        clearInterval(interval);
        doc.removeEventListener("focus", contain);
        doc.removeEventListener("keydown", loopFocus);

        // restoreLastFocus()
        if (!options.disableRestoreFocus) {
          // In IE 11 it is possible for document.activeElement to be null resulting
          // in nodeToRestore.current being null.
          // Not all elements in IE 11 have a focus method.
          // Once IE 11 support is dropped the focus() call can be unconditional.
          if (restoreNode && restoreNode.focus) {
            restoreNode.focus();
          }

          restoreNode = null;
        }
      }
    };
  }
</script>

<script lang="ts">
  import { ownerDocument } from "../dom";
  import { onMount, onDestroy } from "svelte";

  // state
  let sentinelStart: HTMLElement;
  let sentinelEnd: HTMLElement;

  // props
  export let disableAutoFocus: boolean = false;
  export let disableEnforceFocus: boolean = false;
  export let disableRestoreFocus: boolean = false;
  export let onFocus: ((e?: Event) => void) | undefined = undefined;
  export let onTabChange: ((e?: KeyboardEvent) => void) | undefined = undefined;
  export let node: HTMLElement | undefined = undefined;
  export let enable: boolean = true;
  export let getDoc: () => Document = () => ownerDocument(node);
  export let open: boolean;
</script>

<div
  {...$$restProps}
  bind:this={node}
  use:trapFocus={{ disableAutoFocus, getDoc, open, disableEnforceFocus, disableRestoreFocus, enable, sentinelEnd, sentinelStart, onFocus, onTabChange }}>
  <div bind:this={sentinelStart} tabindex={0} data-testid="sentinel-start" />
  <slot />
  <div bind:this={sentinelEnd} tabindex={0} data-testid="sentinel-end" />
</div>
