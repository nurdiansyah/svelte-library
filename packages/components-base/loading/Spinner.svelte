<script lang="ts">
  import clsx from "clsx";

  let className: string | null = null,
    classes: string;
  export { className as class };
  export let type = "border";
  export let size: string | null = null;
  export let color: string | null = null;

  $: classes = clsx(
    className,
    size ? `spinner-${type}-${size}` : false,
    `spinner-${type}`,
    color ? `text-${color}` : false
  );
</script>

<div {...$$restProps} role="status" class="{classes}">
  <span class="sr-only">
    <slot>Loading...</slot>
  </span>
</div>

<style lang="scss" global>
  @use "./spinners.scss";
</style>
