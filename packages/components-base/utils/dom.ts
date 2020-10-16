export const ownerDocument = (node: Node) => (node && node.ownerDocument) || document;
export const ownerWindow = (node: Node) => {
  const doc = ownerDocument(node);
  return doc.defaultView || window;
};

// A change of the browser zoom change the scrollbar size.
// Credit https://github.com/twbs/bootstrap/blob/3ffe3a5d82f6f561b82ff78d82b32a7d14aed558/js/src/modal.js#L512-L519
export const getScrollbarSize = () => {
  const scrollDiv = document.createElement("div");
  scrollDiv.style.width = "99px";
  scrollDiv.style.height = "99px";
  scrollDiv.style.position = "absolute";
  scrollDiv.style.top = "-9999px";
  scrollDiv.style.overflow = "scroll";

  document.body.appendChild(scrollDiv);
  const scrollbarSize = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  document.body.removeChild(scrollDiv);

  return scrollbarSize;
};

export const getOriginalBodyPadding = () => {
  const style = window ? window.getComputedStyle(document.body, null) : { getPropertyValue: (e?: any) => undefined };

  return parseInt((style && style.getPropertyValue("padding-right")) || "0", 10);
};

export const setScrollbarWidth = (padding) => {
  if (padding > 0) {
    document.body.style.paddingRight = `${padding}px`;
  }
};

export const isBodyOverflowing = () => (window ? document.body.clientWidth < window.innerWidth : false);
