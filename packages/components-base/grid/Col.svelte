<script lang="ts">
  import clsx from "clsx";

  let className: string | null = null,
    classes: string;
  export { className as class };
  export let responsive: { sm?: number; md?: number; lg?: number; xl?: number; xxl?: number };
  export let columnSize: number;
  export let offset: number;

  $: {
    const classResponsive: string[] = [];

    for (const breakpoint in responsive) {
      if (breakpoint) {
        classResponsive.push(`-${breakpoint}-${responsive[breakpoint]}`);
      }
    }

    classes = clsx(
      className,
      "grid-col",
      columnSize && `col-${columnSize}`,
      classResponsive,
      offset && `-offset-${offset}`
    );
  }
</script>

<div class="{classes}" {...$$restProps}>
  <slot />
</div>
