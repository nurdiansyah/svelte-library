export interface RippleOptions {
  focusRippleEnable: boolean;
  color: string;
  opacity: number;
  class?: string;
  centered: boolean;
  spreadingDuration: string;
  spreadingDelay: string;
  spreadingTimingFunction: string;
  clearingDuration: string;
  clearingDelay: string;
  clearingTimingFunction: string;
}

/**
 * Options for customizing ripples
 */
const defaults: RippleOptions = {
  focusRippleEnable: true,
  color: "currentColor",
  class: "",
  opacity: 0.1,
  centered: false,
  spreadingDuration: ".4s",
  spreadingDelay: "0s",
  spreadingTimingFunction: "linear",
  clearingDuration: "1s",
  clearingDelay: "0s",
  clearingTimingFunction: "ease-in-out"
};

/**
 * Creates a ripple element but does not destroy it (use RippleStop for that)
 *
 * @param {Event} e
 * @param {Object} options
 * @param {boolean} options.focusRippleEnable
 * @returns Ripple element
 */
export function RippleStart(e, options: Partial<RippleOptions> = {}) {
  e.stopImmediatePropagation();
  const opts = { ...defaults, ...options };

  const isTouchEvent = e.touches ? !!e.touches[0] : false;
  // Parent element
  const target = isTouchEvent ? e.touches[0].currentTarget : e.currentTarget;

  // Create ripple
  const ripple = document.createElement("div");
  const rippleStyle = ripple.style;

  // Adding default stuff
  ripple.className = `dbx-ripple ${opts.class}`;
  rippleStyle.position = "absolute";
  rippleStyle.color = "inherit";
  rippleStyle.borderRadius = "50%";
  rippleStyle.pointerEvents = "none";
  rippleStyle.width = "100px";
  rippleStyle.height = "100px";
  rippleStyle.marginTop = "-50px";
  rippleStyle.marginLeft = "-50px";
  target.appendChild(ripple);
  rippleStyle.opacity = String(opts.opacity);
  rippleStyle.transition = `transform ${opts.spreadingDuration} ${opts.spreadingTimingFunction} ${opts.spreadingDelay},opacity ${opts.clearingDuration} ${opts.clearingTimingFunction} ${opts.clearingDelay}`;
  rippleStyle.transform = "scale(0) translate(0,0)";
  rippleStyle.background = opts.color;

  // Positioning ripple
  const targetRect = target.getBoundingClientRect();
  if (opts.centered) {
    rippleStyle.top = `${targetRect.height / 2}px`;
    rippleStyle.left = `${targetRect.width / 2}px`;
  } else {
    const distY = isTouchEvent ? e.touches[0].clientY : e.clientY;
    const distX = isTouchEvent ? e.touches[0].clientX : e.clientX;
    rippleStyle.top = `${distY - targetRect.top}px`;
    rippleStyle.left = `${distX - targetRect.left}px`;
  }

  // Enlarge ripple
  rippleStyle.transform = `scale(${Math.max(targetRect.width, targetRect.height) * 0.02}) translate(0,0)`;
  return ripple;
}

/**
 * Destroys the ripple, slowly fading it out.
 *
 * @param {Element} ripple
 */
export function RippleStop(ripple) {
  if (ripple) {
    ripple.addEventListener("transitionend", (e) => {
      if (e.propertyName === "opacity") ripple.remove();
    });
    ripple.style.opacity = 0;
  }
}

/**
 * @param node {Element}
 * @param _options {Object}
 * @param _options.focusRippleEnable {boolean}
 */
export const ripple = (node, _options: Partial<RippleOptions> = {}) => {
  let options = _options;
  let destroyed = false;
  let ripple;
  let keyboardActive = false;
  const handleStart = (e) => {
    ripple = RippleStart(e, options);
  };
  const handleStop = () => RippleStop(ripple);
  const handleKeyboardStart = (e) => {
    if (!keyboardActive && (e.code === "Enter" || e.code === "Space")) {
      ripple = RippleStart(e, { ...options, centered: true });
      keyboardActive = true;
    }
  };
  const handleKeyboardStop = () => {
    keyboardActive = false;
    handleStop();
  };

  function setup() {
    node.classList.add("ripple-container");
    node.addEventListener("pointerdown", handleStart);
    node.addEventListener("pointerup", handleStop);
    node.addEventListener("pointerleave", handleStop);
    node.addEventListener("keydown", handleKeyboardStart);
    node.addEventListener("keyup", handleKeyboardStop);
    destroyed = false;
  }

  function destroy() {
    node.classList.remove("ripple-container");
    node.removeEventListener("pointerdown", handleStart);
    node.removeEventListener("pointerup", handleStop);
    node.removeEventListener("pointerleave", handleStop);
    node.removeEventListener("keydown", handleKeyboardStart);
    node.removeEventListener("keyup", handleKeyboardStop);
    destroyed = true;
  }

  if (options.focusRippleEnable) setup();

  return {
    update(newOptions) {
      options = newOptions;
      if (options.focusRippleEnable && destroyed) setup();
      else if (!(options.focusRippleEnable || destroyed)) destroy();
    },
    destroy
  };
};
