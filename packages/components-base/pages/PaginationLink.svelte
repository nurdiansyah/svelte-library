<script lang="ts">
  import clsx from "clsx";

  let className: string | null = null,
    classes: string;
  export { className as class };
  export let next: boolean = false;
  export let previous: boolean = false;
  export let first: boolean = false;
  export let last: boolean = false;
  export let ariaLabel: string | null = null;
  export let href: string | null = null;

  $: classes = clsx(className, "page-link");

  let defaultAriaLabel;

  $: if (previous) {
    defaultAriaLabel = "Previous";
  } else if (next) {
    defaultAriaLabel = "Next";
  } else if (first) {
    defaultAriaLabel = "First";
  } else if (last) {
    defaultAriaLabel = "Last";
  }

  $: realLabel = ariaLabel || defaultAriaLabel;

  let defaultCaret;
  $: if (previous) {
    defaultCaret = "\u2039";
  } else if (next) {
    defaultCaret = "\u203A";
  } else if (first) {
    defaultCaret = "\u00ab";
  } else if (last) {
    defaultCaret = "\u00bb";
  }
</script>

<a {...$$restProps} class="{classes}" on:click {href}>
  {#if previous || next || first || last}
    <span aria-hidden="true">
      <slot>{defaultCaret}</slot>
    </span>
    <span class="sr-only">{realLabel}</span>
  {:else}
    <slot />
  {/if}
</a>
