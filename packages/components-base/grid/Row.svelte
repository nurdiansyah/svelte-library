<script lang="ts">
  import clsx from "clsx";

  type Column = "auto" | number;
  let className: string | null = null,
    classes: string;
  export { className as class };
  export let gutter: number;
  export let gutterX: number;
  export let gutterY: number;
  export let column: Column;
  export let responsive: {
    sm?: Column;
    md?: Column;
    lg?: Column;
    xl?: Column;
    xxl?: Column;
  };

  $: {
    const classResponsive: string[] = [];
    if (column) {
      const _clss = column === "auto" ? "-auto" : `-cols-${column}`;
      classResponsive.push(_clss);
    }

    for (const key in responsive) {
      classResponsive.push(`-cols-${key}-${responsive[key]}`);
    }
    column && `-${column}`;
    classes = clsx(className, "grid-row", classResponsive);
  }
</script>

<div class="{classes}" style="--gutter-x: {gutterX || gutter}; --gutter-y: {gutterY || gutter}">
  <slot />
</div>

<style lang="scss" global>
  @use "./grid";
</style>
