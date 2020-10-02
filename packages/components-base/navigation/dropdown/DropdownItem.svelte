<script lang="ts">
  import clsx from "clsx";

  import { getContext } from "svelte";

  const context = getContext("dropdownContext");

  let className: string | null = null,
    classes: string;
  export { className as class };

  export let active: boolean = false;
  export let disabled: boolean = false;
  export let divider: boolean = false;
  export let header: boolean = false;
  export let toggle: boolean = true;
  export let href: string | null = null;

  $: classes = clsx(className, {
    disabled,
    "dropdown-item": !divider && !header,
    active: active,
    "dropdown-header": header,
    "dropdown-divider": divider
  });

  function handleItemClick(e) {
    if (disabled || header || divider) {
      e.preventDefault();
      return;
    }

    if (toggle) {
      $context.toggle(e);
    }
  }
</script>

{#if header}
  <h6 {...$$restProps} on:click on:click="{handleItemClick}" class="{classes}">
    <slot />
  </h6>
{:else if divider}
  <div {...$$restProps} on:click on:click="{handleItemClick}" class="{classes}">
    <slot />
  </div>
{:else if href}
  <a {...$$restProps} on:click="{handleItemClick}" {href} class="{classes}">
    <slot />
  </a>
{:else}
  <button {...$$restProps} on:click on:click="{handleItemClick}" class="{classes}">
    <slot />
  </button>
{/if}
