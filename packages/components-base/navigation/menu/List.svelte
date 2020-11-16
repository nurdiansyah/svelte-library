<script lang="ts">
  import { onMount } from "svelte";
  import List from "../../data-display/List.svelte";
  import { clsx } from "../../utils";
  import { ownerDocument } from "../../utils/dom";
  import type { DataList } from "../../types";

  // state
  let { class: className } = $$props;
  let listNode: HTMLElement;
  let textCriteria: {
    keys: [];
    repeating: true;
    previousKeyMatched: true;
    lastTime: null;
  };
  let classes: string | undefined;

  // props
  export let autoFocus: boolean = false;
  export let autoFocusItem: boolean = false;
  export let disableItemsFocusable: boolean = false;
  export let disableListWrap: boolean = false;
  export let onKeyDown: ((e?: Event) => void) | undefined = undefined;
  export let variant: "menu" | "selectedMenu";
  export let dataList: DataList;

  onMount(() => {
    init();
  });

  function init() {
    if (listNode) {
    }
  }

  function nextItem(nodeFocus?: HTMLElement, _disableListWrap?: boolean) {
    if (nodeFocus === listNode) {
      return listNode.firstChild;
    }
    // nodeFocus is Item list
    if (nodeFocus && nodeFocus.nextElementSibling) {
      return nodeFocus.nextElementSibling;
    }

    // tidak node focus
    return _disableListWrap ? null : listNode.firstChild;
  }

  function previousItem(nodeFocus?: HTMLElement, _disableListWrap?: boolean) {
    if (nodeFocus === listNode) {
      return _disableListWrap ? listNode.firstChild : listNode.lastChild;
    }

    if (nodeFocus && nodeFocus.previousElementSibling) {
      return nodeFocus.previousElementSibling;
    }
    return _disableListWrap ? null : listNode.lastChild;
  }

  function textCriteriaMatches(nextFocus?: HTMLElement, _textCriteria: typeof textCriteria) {
    if (_textCriteria === undefined) {
      return true;
    }
    let text = nextFocus?.innerText || nextFocus?.textContent;
    text = text.trim().toLowerCase();
    if (text.length === 0) {
      return false;
    }
    if (_textCriteria.repeating) {
      return text[0] === _textCriteria.keys[0];
    }
    return text.indexOf(_textCriteria.keys.join("")) === 0;
  }

  function moveFocus(
    currentFocus?: HTMLElement,
    _disableListWrap?: boolean,
    _disableItemsFocusable?: boolean,
    traversalFunction?: (nodeFocus?: HTMLElement) => null | HTMLInputElement,
    _textCriteria?: typeof textCriteria
  ) {
    let wrappedOnce = false;
    let nextFocus = traversalFunction(currentFocus);

    while (nextFocus) {
      // prevent infinite loop.
      if (nextFocus === listNode.firstChild) {
        if (wrappedOnce) {
          return;
        }
        wrappedOnce = true;
      }

      // same logix as autocomplete.js
      const nextFocusDisabled = _disableItemsFocusable
        ? false
        : nextFocus.disabled || nextFocus.getAttribute("aria-disabled") === "true";

      if (!nextFocus.hasAttribute("tabindex") || !textCriteriaMatches(nextFocus, _textCriteria) || nextFocusDisabled) {
        // move next to element item
        nextFocus = traversalFunction(nextFocus);
      } else {
        nextFocus.focus();
        return;
      }
    }
  }

  // handler
  function handleKeyDown(e: KeyboardEvent) {
    const currentFocus = ownerDocument(listNode).activeElement;
    const key = e.key;

    if (key === "ArrowDown") {
      e.preventDefault();
      moveFocus(currentFocus, disableListWrap, disableItemsFocusable, nextItem);
    } else if (key === "ArrowUp") {
      e.preventDefault();
      moveFocus(currentFocus, disableListWrap, disableItemsFocusable, previousItem);
    } else if ("Home") {
      e.preventDefault();
      moveFocus(null, disableListWrap, disableItemsFocusable, nextItem);
    } else if ("end") {
      e.preventDefault();
      moveFocus(null, disableListWrap, disableItemsFocusable, previousItem);
    } else if (key.length === 1) {
      const _textCriteria = textCriteria;
      const lowerKey = key.toLocaleLowerCase();
      const currTime = performance.now();
      if (_textCriteria.keys.length > 0) {
        // reset
        if (currTime - _textCriteria.lastTime > 500) {
          _textCriteria.keys = [];
          _textCriteria.repeating = true;
          _textCriteria.previousKeyMatched = true;
        } else if (_textCriteria.repeating && lowerKey !== _textCriteria.keys[0]) {
          _textCriteria.repeating = false;
        }
      }
      _textCriteria.lastTime = currTime;
      _textCriteria.keys.push(lowerKey);
      const keepFocusCurrent =
        currentFocus && !_textCriteria.repeating && textCriteriaMatches(currentFocus, _textCriteria);
      if (
        _textCriteria.previousKeyMatched &&
        (keepFocusCurrent || moveFocus(currentFocus, false, disableItemsFocusable, nextItem, _textCriteria))
      ) {
        e.preventDefault();
      } else {
        _textCriteria.previousKeyMatched = false;
      }
    }
    if (onKeyDown) {
      onKeyDown(e);
    }
  }

  // reactive
  $: autoFocus && listNode?.focus();
  $: classes = clsx(className);
</script>

<List {...$$restProps} bind:listNode on:keydown={handleKeyDown} tabindex={autoFocus ? 0 : 1}>
  <slot />
</List>
