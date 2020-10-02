<script lang="ts">
  import clsx from "clsx";

  let className: string | null = null,
    classes: string;
  export { className as class };
  export let listClassName;
  export let size: "sm" | "lg";
  export let ariaLabel = "pagination";

  $: classes = clsx(className);
  $: listClasses = clsx(listClassName, "pagination", size && `-${size}`);
</script>

<nav {...$$restProps} class="{classes}" aria-label="{ariaLabel}">
  <ul class="{listClasses}">
    <slot />
  </ul>
</nav>

<style lang="scss" global>
  @use "./pagination.scss";
</style>
