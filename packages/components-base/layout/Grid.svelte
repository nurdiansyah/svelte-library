<script lang="ts">
  import { clsx } from "../utils";

  let { class: className } = $$props;
  let classes: string | undefined;

  export let alignContent: "stretch" | "center" | "flex-start" | "flex-end" | "space-between" | "space-around" =
    "stretch";
  export let alignItems: "stretch" | "center" | "flex-start" | "flex-end" | "space-between" | "space-around" =
    "stretch";
  export let direction: "row" | "row-reverse" | "column" | "column-reverse" = "row";
  export let justify: "flex-start" | "center" | "flex-end" | "space-beteen" | "space-around" | "space-evenly" =
    "flex-start";
  export let container: boolean = false;
  export let item: boolean = false;
  export let spacing: number = 0;
  export let wrap: "wrap" | "nowrap" | "wrap-reverse" = "wrap";
  export let xs: "auto" | boolean | number = false;
  export let sm: "auto" | boolean | number = false;
  export let md: "auto" | boolean | number = false;
  export let lg: "auto" | boolean | number = false;
  export let xl: "auto" | boolean | number = false;
  export let zeroMinWidth: boolean = false;

  $: classes = clsx(
    className,
    "dbx-grid",
    item && "-item",
    zeroMinWidth && "-zero-min-width",
    container && spacing === 0 && `-spacing-xs-${String(spacing)}`,
    direction !== "row" && `-direction-xs-${String(direction)}`,
    wrap !== "wrap" && `-wrap-xs-${String(wrap)}`,
    alignItems !== "stretch" && `-align-items-xs-${String(alignItems)}`,
    alignContent !== "stretch" && `-align-content-xs-${String(alignContent)}`,
    justify !== "flex-start" && `-justify-xs-${String(justify)}`,
    xs && `-xs-${xs}`,
    sm && `-sm-${sm}`,
    md && `-md-${md}`,
    lg && `-lg-${lg}`,
    xl && `-xl-${xl}`
  );
</script>

<div {...$$restProps} class={classes}>
  <slot />
</div>

<style src="./styles/grid.scss" global>
</style>
