<script lang="ts">
  import clsx from "clsx";

  let className: string | null = null,
    classes: string;
  export { className as class };
  export let active: boolean = false;
  export let disabled: boolean = false;
  export let color: string | null = null;
  export let action: boolean = false;
  export let href: string | null = null;
  export let tag: "button";

  $: classes = clsx(
    className,
    "list-group-item",
    active && "-active",
    disabled && "-disabled",
    action && "-action",
    color && `-${color}`
  );
</script>

{#if href}
  <a {...$$restProps} class="{classes}" {href} {disabled}>
    <slot />
  </a>
{:else if tag === 'button'}
  <button {...$$restProps} class="{classes}" type="button" on:click {disabled}>
    <slot />
  </button>
{:else}
  <li {...$$restProps} class="{classes}" {disabled}>
    <slot />
  </li>
{/if}
