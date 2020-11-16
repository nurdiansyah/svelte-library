<script lang="ts">
  import { clsx } from "../utils";

  let { class: className } = $$props;
  let classes: string | undefined;
  let listClasses;
  export let listClassName;
  export let size: "sm" | "lg";
  export let ariaLabel = "pagination";

  $: classes = clsx(className);
  $: listClasses = clsx(listClassName, "pagination", size && `-${size}`);
</script>

<nav {...$$restProps} class={classes} aria-label={ariaLabel}>
  <ul class={listClasses}>
    <slot />
  </ul>
</nav>

<style src="./pagination/style.scss" global>
</style>
