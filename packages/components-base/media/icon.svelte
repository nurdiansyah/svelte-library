<script lang="ts">
  import clsx from "clsx";

  let className: string | null = null,
    classes: string,
    fontSize: string | null;
  export { className as class };
  export let name: string | null = null;
  export let size = null;
  export let color = null;
  $: classes = clsx("dbx-icon", className, `-${name}`);
  $: fontSize = typeof size === "number" ? `${size}rem` : size;
</script>

<i class="{classes}" style="--icon-size: {fontSize};--icon-color: {color};"></i>

<style lang="scss" global>
  @use "deboxicon";
</style>
