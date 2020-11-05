<script lang="ts">
  import type { OnEvent } from "../types/core";
  import type { Anchor } from "../types/navigation";

  import { clsx } from "../utils";
  import Paper from "../surfaces/Paper.svelte";
  import Modal from "../utils/Modal.svelte";

  // props
  export let anchor: Anchor = "left";
  export let elevation: number = 16;
  export let modalProps: Record<string, any> = {};
  export let open: boolean = false;
  export let onClose: OnEvent = undefined;
  export let paperProps: Record<string, any> = {};
  export let minimized: boolean = false;
  export let variant: "float" | "sticky" | "default" = "default";
  export let docked: boolean = true;

  // state
  let { class: className } = $$props;
  let classes: string;

  // handler

  function handleClose() {
    open = false;
    onClose && onClose();
  }

  // reactive
  $: {
    if (variant === "default" && window?.matchMedia("(max-width: 600px)").matches) {
      docked = false;
    } else if (variant === "float") {
      docked = false;
    } else {
      docked = true;
    }
    if (docked) {
      classes = clsx(className, "dbx-drawer", "-docked", minimized && "-minimized");
    } else {
      classes = clsx(className, "dbx-drawer", `-anchor-${anchor}`);
    }

    // paper-props
    elevation = docked ? 0 : elevation;
    paperProps = { ...paperProps, ...{ elevation, square: true } };
  }
</script>

{#if docked}
  <div {...$$restProps} class={classes}>
    <Paper {...paperProps}>
      <slot />
    </Paper>
  </div>
{:else if open}
  <Modal {...modalProps} class={classes} {open} onClose={handleClose} data-testid="drawer">
    <Paper {...paperProps} inherit>
      <slot />
    </Paper>
  </Modal>
{/if}

<style src="./styles/drawer.scss" global>
</style>
