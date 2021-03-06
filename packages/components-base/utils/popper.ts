import { createPopper, Instance, OptionsGeneric, Modifier } from "@popperjs/core/lib/popper-lite";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type PopperOptions = Partial<OptionsGeneric<Partial<Modifier<any, any>>>>;
type ReferenceAction = (
  node: HTMLElement
) => {
  destroy(): void;
};
type ContentAction = (
  node: HTMLElement,
  popperOptions: PopperOptions
) => {
  update(popperOptions: PopperOptions): void;
  destroy(): void;
};

export function createPopperActions(): [ReferenceAction, ContentAction] {
  let popperInstance: Instance | null;
  let referenceNode: HTMLElement;
  let contentNode: HTMLElement;
  let options: PopperOptions | undefined;

  function initPopper() {
    if (referenceNode && contentNode) {
      popperInstance = createPopper(referenceNode, contentNode, options);
    }
  }

  function deinitPopper() {
    if (popperInstance) {
      popperInstance.destroy();
      popperInstance = null;
    }
  }

  function referenceAction(node: HTMLElement) {
    referenceNode = node;
    initPopper();
    return {
      destroy() {
        deinitPopper();
      }
    };
  }

  function contentAction(node: HTMLElement, popperOptions?: PopperOptions) {
    contentNode = node;
    options = popperOptions;
    initPopper();
    return {
      update(popperOptions: PopperOptions) {
        options = popperOptions;
        if (popperInstance) popperInstance.setOptions(options);
      },
      destroy() {
        deinitPopper();
      }
    };
  }

  return [referenceAction, contentAction];
}
