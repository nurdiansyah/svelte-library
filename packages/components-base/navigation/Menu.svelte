<script lang="ts">
  import { clsx } from "../utils";
  import MenuList from "./menu/List.svelte";
  import PopOver from "../utils/PopOver.svelte";

  // state
  let { class: className } = $$props;
  let classes: string | undefined;
  let listNode: HTMLElement;
  let autoFocusItem: boolean;

  // props
  export let autoFocus: boolean = true;
  export let disableAutoFocusItem = false;
  export let onClose: ((e?: Event) => void) | undefined = undefined;
  export let onEnter: ((e?: Event) => void) | undefined = undefined;
  export let onEntering: ((e?: Event) => void) | undefined = undefined;
  export let onEntered: ((e?: Event) => void) | undefined = undefined;
  export let onExit: ((e?: Event) => void) | undefined = undefined;
  export let onExiting: ((e?: Event) => void) | undefined = undefined;
  export let onExited: ((e?: Event) => void) | undefined = undefined;
  export let open: boolean;
  export let anchorEl: HTMLElement | (() => HTMLElement) | undefined = undefined;
  export let paperProps: Record<string, any> = {};
  export let transitionDuration: number | undefined = undefined;
  export let variant: "menu" | "selected-menu" = "menu";
  export let direction: "ltr" | "rtl" = "ltr";

  const RTL_ORIGIN = {
    vertical: "top",
    horizontal: "right"
  };

  const LTR_ORIGIN = {
    vertical: "top",
    horizontal: "left"
  };

  // handler
  function handleListKeyDown(e: KeyboardEvent) {
    if (e.key === "Tab") {
      e.preventDefault();

      onClose && onClose(e, "tab-key-down");
    }
  }

  // reactive
  $: classes = clsx(className);
  $: autoFocusItem = autoFocus && !disableAutoFocusItem && open;
</script>

<PopOver
  {paperProps}
  {anchorEl}
  anchorOrigin={direction === 'rtl' ? RTL_ORIGIN : LTR_ORIGIN}
  transformOrigin={direction === 'rtl' ? RTL_ORIGIN : LTR_ORIGIN}
  {onClose}
  {onEnter}
  {onEntering}
  {onEntered}
  {onExit}
  {onExiting}
  {onExited}
  {transitionDuration}
  {open}
  getContentAnchorEl={() => listNode}>
  <MenuList class={classes} bind:node={listNode} {autoFocus} {autoFocusItem} {variant} onKeyDown={handleListKeyDown}>
    <slot />
  </MenuList>
</PopOver>

<style src="./styles/menu.scss" global>
</style>
