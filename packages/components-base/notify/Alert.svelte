<script lang="ts">
  import { fade as fadeTransition } from "svelte/transition";
  import clsx from "clsx";

  let className: string | null = null,
    classes: string;
  export { className as class };
  export let type: string = "success";
  export let closeClassName: string | null = null;
  export let closeAriaLabel: string = "Close";
  export let isOpen: boolean = true;
  export let fade: boolean = true;
  export let dismissible: boolean = false;
  export let onClose = () => {
    isOpen = false;
  };
  export let transition = { duration: fade ? 400 : 0 };

  $: classes = clsx(className, "alert", type && `-${type}`, dismissible && "-dismissible");
  $: closeClassNames = clsx("close", closeClassName);
</script>

{#if isOpen}
  <div {...$$restProps} transition:fadeTransition="{transition}" class="{classes}" role="alert">
    {#if dismissible}
      <button type="button" class="{closeClassNames}" aria-label="{closeAriaLabel}" on:click="{onClose}">
        <span aria-hidden="true">×</span>
      </button>
    {/if}
    <slot />
  </div>
{/if}

<style lang="scss" global>
  @use "./alert.scss";
</style>
