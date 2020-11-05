<script lang="ts">
  import { clsx } from "../../utils";

  let { class: className } = $$props;
  let classes: string | undefined;
  export let next: boolean = false;
  export let previous: boolean = false;
  export let first: boolean = false;
  export let last: boolean = false;
  export let ariaLabel: string | undefined = undefined;
  export let href: string | undefined = undefined;

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

<a {...$$restProps} class={classes} on:click {href}>
  {#if previous || next || first || last}
    <span aria-hidden="true">
      <slot>{defaultCaret}</slot>
    </span>
    <span class="sr-only">{realLabel}</span>
  {:else}
    <slot />
  {/if}
</a>
