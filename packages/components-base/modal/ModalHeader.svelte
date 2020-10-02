<script lang="ts">
  import clsx from "clsx";

  let className: string | null = null,
    classes: string;
  export { className as class };
  export let toggle = undefined;
  export let closeAriaLabel = "Close";
  export let charCode: number = 215;
  export let children = undefined;

  $: closeIcon = typeof charCode === "number" ? String.fromCharCode(charCode) : charCode;

  $: classes = clsx(className, "modal-header");
</script>

<div {...$$restProps} class="{classes}">
  <h5 class="modal-title">
    {#if children}
      {children}
    {:else}
      <slot />
    {/if}
  </h5>
  <slot name="close">
    {#if typeof toggle === 'function'}
      <button type="button" on:click="{toggle}" class="close" aria-label="{closeAriaLabel}">
        <span aria-hidden="true">{closeIcon}</span>
      </button>
    {/if}
  </slot>
</div>
