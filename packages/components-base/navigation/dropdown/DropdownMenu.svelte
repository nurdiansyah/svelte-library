<script lang="ts">
  import clsx from "clsx";

  import { getContext } from "svelte";

  const context = getContext<any>("dropdownContext");

  let className: string | null = null,
    classes: string;
  export { className as class };
  export let right: boolean = false;

  $: classes = clsx(className, "dropdown-menu", {
    "dropdown-menu-right": right,
    show: $context.open
  });
</script>

<div {...$$restProps} class="{classes}">
  <slot />
</div>
