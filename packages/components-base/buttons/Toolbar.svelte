<script lang="ts">
  import clsx from "clsx";

  let className: string | null = null,
    classes: string;

  export let disableGutter: boolean = false;

  export { className as class };
  $: classes = clsx(className, "dbx-toolbar", !disableGutter && "-gutter");
</script>

<div class="{classes}" role="toolbar" {...$$restProps}>
  <slot />
</div>

<style src="./toolbar.scss" global>
</style>
