<script lang="ts">
  import type { SvelteComponent } from "svelte/internal";

  import { clsx } from "./clsx";
  import { onMount, onDestroy } from "svelte";
  import { fade as fadeTransition } from "svelte/transition";
  import TrapFocus from "./modal/TrapFocus.svelte";
  import { ownerDocument } from "./dom";
  import Portal from "./Portal.svelte";
  import { getModalManager, ModalManager } from "./modal/ModalManager";
  import SimpleBackdrop from "./modal/SimpleBackdrop.svelte";

  let { class: className } = $$props;
  let classes: string;
  let exited: boolean = false;
  let BackdropComponent: typeof SvelteComponent | undefined;

  export let backdropComponent: typeof SvelteComponent = SimpleBackdrop;
  export let backdropProps: Record<string, any> = {};
  export let closeAfterTransition: boolean = false;
  export let container: HTMLElement | undefined = undefined;
  export let disableAutoFocus: boolean = false;
  export let disableBackdropClick: boolean = false;
  export let disableEnforceFocus: boolean = false;
  export let disableEscapeKeyDown: boolean = false;
  export let disablePortal: boolean = false;
  export let disableRestoreFocus: boolean = false;
  export let disableScrollLock: boolean = false;
  export let hideBackdrop: boolean = false;
  export let labelledBy: string | undefined = undefined;
  export let manager: ModalManager | undefined = undefined;
  export let node: HTMLElement | undefined = undefined;
  export let onBackdropClick: null | ((e?: Event) => void) = null;
  export let onEnter: null | ((e?: Event) => void) = null;
  export let onEntering: null | ((e?: Event) => void) = null;
  export let onEntered: null | ((e?: Event) => void) = null;
  export let onExit: null | ((e?: Event) => void) = null;
  export let onExiting: null | ((e?: Event) => void) = null;
  export let onExited: null | ((e?: Event) => void) = null;
  export let onClose: null | ((e?: Event, info?: any) => void) = null;
  export let onEscapeKeyDown: null | ((e: Event) => void) = null;
  export let onOpen: null | ((e?: Event) => void) = null;
  export let open: boolean = false;
  export let transitionDuration: number = 300;

  const isTopModal = () => manager?.isTopModal(node) || false;

  function handleMount() {
    if (!manager) {
      manager = getModalManager();
    }
    manager.mount(node, { disableScrollLock });
    if (node) node.scrollTop = 0;
  }

  function handleOpen() {
    if (!manager || !node || !container) return;
    manager.add(node, container);
    if (onOpen) {
      onOpen();
    }
    if (exited) {
      handleMount();
    }
  }

  function handleClose() {
    const index = (manager && node && manager.remove(node)) || -1;
    if (index > -1 && onClose) {
      onClose();
    }
  }

  function handleBackdropClick(e: Event) {
    if (e.target !== e.currentTarget) {
      return;
    }
    if (onBackdropClick) {
      onBackdropClick(e);
    }
    if (!disableBackdropClick && onClose) {
      onClose(e, "backdrop-click");
    }
  }

  function handleKeyDown(e: KeyboardEvent) {
    // The handler doesn't take event.defaultPrevented into account:
    //
    // event.preventDefault() is meant to stop default behaviours like
    // clicking a checkbox to check it, hitting a button to submit a form,
    // and hitting left arrow to move the cursor in a text input etc.
    // Only special HTML elements have these default behaviors.
    if (e.key !== "Escape" || !isTopModal()) {
      return;
    }

    // Swallow the event, in case someone is listening for the escape key on the body.
    e.stopPropagation();

    if (onEscapeKeyDown) {
      onEscapeKeyDown(e);
    }

    if (!disableEscapeKeyDown && onClose) {
      onClose(e);
    }
  }

  function handleEntering() {
    onEntering && onEntering();
  }
  function handleEntered() {
    onEntered && onEntered();
  }
  function handleExiting() {
    onExiting && onExiting();
  }
  function handleExited() {
    closeAfterTransition && handleClose();
    onExited && onExited();
    exited = true;
  }

  onMount(async () => {
    if (!container) container = ownerDocument(node).body;
    onEnter && onEnter();
  });

  onDestroy(() => {
    onExit && onExit();
  });

  $: {
    if (open) {
      handleOpen();
    } else if (!closeAfterTransition) {
      handleClose();
    }
  }
  $: classes = clsx(className, "dbx-modal", open && "-open");

  $: {
    BackdropComponent = hideBackdrop ? undefined : backdropComponent;
  }
</script>

{#if container}
  <Portal {container} disable={disablePortal}>
    <div
      {...$$restProps}
      class={classes}
      aria-labelledby={labelledBy}
      bind:this={node}
      transition:fadeTransition|local={{ duration: transitionDuration }}
      on:outroend={handleExited}
      on:outrostart={handleExiting}
      on:introstart={handleEntering}
      on:introend={handleEntered}
      on:keydown={handleKeyDown}
      role="presentation">
      <svelte:component this={BackdropComponent} {...backdropProps} on:click={handleBackdropClick} />
      <TrapFocus
        {disableAutoFocus}
        {disableEnforceFocus}
        {disableRestoreFocus}
        enable={isTopModal()}
        {open}
        getDoc={() => ownerDocument(node)}>
        <slot />
      </TrapFocus>
    </div>
  </Portal>
{/if}

<style src="./styles/modal.scss" global>
</style>
