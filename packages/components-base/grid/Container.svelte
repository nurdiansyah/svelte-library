<script lang="ts">
  import clsx from "clsx";

  let className: string | null = null,
    classes: string;
  export let fluid: boolean = false;
  export { className as class };
  export let responsive: "sm" | "md" | "lg" | "xl" | "xxl" = "sm";

  $: classes = clsx(className, "container", !fluid && responsive && `-${responsive}`);
</script>

<div class="{classes}" {...$$restProps}>
  <slot />
</div>

<style lang="scss">
  @use "./container";
</style>
