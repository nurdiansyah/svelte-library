<script lang="ts">
  import clsx from "clsx";
  import { getId } from "../utils";

  let className: string | null = null,
    classes: string;
  export { className as class };
  export let active: boolean = false;
  export let theme: string = "secondary";
  export let disabled: boolean = false;
  export let href: string | null = null;
  export let id: string = getId();
  export let outline: boolean = false;
  export let size: "sm" | "lg" | null = null;
  export let style: string | null = null;
  export let close: boolean = false;

  export let value: string | null = null;
  export let link: boolean = false;

  $: ariaLabel = $$props["aria-label"];
  $: classes = clsx(
    className,
    "button",
    (href || link) && "-link",
    outline && "-outline",
    disabled && "-disabled",
    active && "-active",
    size && `-${size}`,
    `-${theme}`
  );
  $: defaultAriaLabel = close ? "Close" : null;
</script>

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
    <slot />
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
    <slot />
  </button>
{/if}

<style lang="scss" src="./_button.scss">

</style>
