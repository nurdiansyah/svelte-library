<script lang="ts">
  import clsx from "clsx";
  import Button from "Button.svelte";

  let className: string | null = null,
    classes: string;
  export { className as class };
  $: classes = clsx(className, "button-toolbar");
</script>

<div class="{classes}" role="toolbar" {...$$restProps}>
  <slot />
  <Button />
</div>

<style lang="scss">
  @use "./button-toolbar";
</style>
