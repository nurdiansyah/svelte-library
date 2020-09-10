<script lang="ts">
  import clsx from "clsx";

  let className = "";
  export { className as class };
  export let active = false;
  export let block = false;
  export let children = undefined;
  export let theme = "secondary";
  export let disabled = false;
  export let href = "";
  export let id = undefined;
  export let outline = false;
  export let size = undefined;
  export let style = undefined;

  export let value = undefined;
  export let link = false;

  $: ariaLabel = $$props["aria-label"];

  $: classes = clsx(
    className,
    block ? "button-block" : href || link ? "button-link" : "button-inline",
    {
      "-outline": outline,
      "-disabled": disabled,
      "-active": active
    },
    size && `-${size}`,
    `-${theme}`
  );

  $: defaultAriaLabel = close ? "Close" : null;
</script>

<style lang="scss" global>
  @use "./button";
</style>

{#if href}
  <a
    {...$$restProps}
    {id}
    class="{classes}"
    {disabled}
    on:click
    {href}
    aria-label="{ariaLabel || defaultAriaLabel}"
    {style}>
    {#if children}
      {children}
    {:else}
      <slot />
    {/if}
  </a>
{:else}
  <button
    {...$$restProps}
    {id}
    class="{classes}"
    {disabled}
    on:click
    {value}
    aria-label="{ariaLabel || defaultAriaLabel}"
    {style}>
    {#if children}
      {children}
    {:else}
      <slot />
    {/if}
  </button>
{/if}
