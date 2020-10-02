<script lang="ts">
  import clsx from "clsx";

  let className: string | null = null,
    classes: string;
  export { className as class };
  export let id: string | null = null;
  export let tag = "div";

  $: classes = clsx(className, "card-header");
</script>

{#if tag === 'h3'}
  <h3 {...$$restProps} {id} class="{classes}" on:click>
    <slot />
  </h3>
{:else}
  <div {...$$restProps} {id} class="{classes}" on:click>
    <slot />
  </div>
{/if}
