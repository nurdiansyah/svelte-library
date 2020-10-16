import { domUtils } from "../";

export interface Options {
  disableAutoFocus?: boolean;
  disableEnforceFocus?: boolean;
  disableRestoreFocus?: boolean;
  sentinelStart: HTMLElement;
  sentinelEnd: HTMLElement;
  isEnabled: () => boolean;
  open: boolean;
}

let ignoreNextEnforceFocus: boolean;
let nodeToRestore: HTMLElement | null = null;

const useEffect = (
  node: HTMLElement,
  { open, disableAutoFocus, disableEnforceFocus, disableRestoreFocus, isEnabled, sentinelStart, sentinelEnd }: Options
) => {
  if (!open) {
    return;
  }

  const doc = domUtils.ownerDocument(node);
  if (!disableAutoFocus && node.contains(doc.activeElement)) {
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

  const contain = () => {
    if (disableEnforceFocus || !isEnabled() || ignoreNextEnforceFocus) {
      ignoreNextEnforceFocus = false;
      return;
    }

    if (!node.contains(doc.activeElement)) {
      node.focus();
    }
  };

  const loopFocus = (e: KeyboardEvent) => {
    // 9 = tab
    if (disableEnforceFocus || !isEnabled() || e.code !== "9") {
      return;
    }

    // Make sure the next tab starts from the right place.
    if (doc.activeElement === node) {
      // We need to ignore the next contain as
      // it will try to move the focus back to the rootRef element.
      ignoreNextEnforceFocus = true;
      if (e.shiftKey) {
        sentinelEnd.focus();
      } else {
        sentinelStart.focus();
      }
    }
  };

  doc.addEventListener("focus", contain, true);
  doc.addEventListener("keydown", loopFocus, true);

  // With Edge, Safari and Firefox, no focus related events are fired when the focused area stops being a focused area
  // e.g. https://bugzilla.mozilla.org/show_bug.cgi?id=559561.
  //
  // The whatwg spec defines how the browser should behave but does not explicitly mention any events:
  // https://html.spec.whatwg.org/multipage/interaction.html#focus-fixup-rule.
  const interval = setInterval(() => {
    contain();
  }, 50);

  return () => {
    clearInterval(interval);
    doc.removeEventListener("focus", contain, true);
    doc.removeEventListener("keydown", loopFocus, true);

    // restoreLastFocus()
    if (!disableRestoreFocus) {
      // In IE 11 it is possible for document.activeElement to be null resulting
      // in nodeToRestore.current being null.
      // Not all elements in IE 11 have a focus method.
      // Once IE 11 support is dropped the focus() call can be unconditional.
      if (nodeToRestore && nodeToRestore.focus) {
        nodeToRestore.focus();
      }

      nodeToRestore = null;
    }
  };
};

export const useTrapFocus = (node: HTMLElement, options: Options) => {
  const destroy = useEffect(node, options);
  let _openCache = options.open;
  return {
    update: ({ open }: Options) => {
      if (open !== _openCache) {
        _openCache = open;
        if (options.open && typeof window !== "undefined") {
          nodeToRestore = domUtils.ownerDocument(node).activeElement as HTMLElement;
        }
      }
    },
    destroy
  };
};
