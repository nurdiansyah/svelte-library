<script lang="ts">
  import clsx from "clsx";

  let className: string | null = null,
    classes: string;
  export { className as class };
  export let size: "sm" | "lg";

  $: classes = clsx(className, "input-group", size && `-${size}`);
</script>

<div {...$$restProps} class="{classes}">
  <slot />
</div>

<style lang="scss" global>
  @use "./input-group";
</style>
