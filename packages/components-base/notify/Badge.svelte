<script type="ts">
  import clsx from "clsx";

  let className: string | null = null,
    classes: string;
  export { className as class };
  export let children = undefined;
  export let color = "secondary";
  export let href = undefined;
  export let pill: boolean = false;

  $: classes = clsx(className, "badge", `badge-${color}`, pill ? "badge-pill" : false);
</script>

{#if href}
  <a {...$$restProps} {href} class="{classes}">
    {#if children}
      {children}
    {:else}
      <slot />
    {/if}
  </a>
{:else}
  <span {...$$restProps} class="{classes}">
    {#if children}
      {children}
    {:else}
      <slot />
    {/if}
  </span>
{/if}

<style lang="scss">
  @use "./badge.scss";
</style>
