<script lang="ts">
  import type { GripProps } from "./types";

  import { clsx } from "../utils";

  let { class: className } = $$props;
  let classes: string | undefined;

  export let alignContent: GripProps["alignContent"] = "stretch";
  export let alignContentSm: GripProps["alignContentSm"] = "stretch";
  export let alignContentMd: GripProps["alignContentMd"] = "stretch";
  export let alignContentLg: GripProps["alignContentLg"] = "stretch";
  export let alignContentXl: GripProps["alignContentXl"] = "stretch";
  export let alignItems: GripProps["alignItems"] = "stretch";
  export let alignItemsSm: GripProps["alignItemsSm"] = "stretch";
  export let alignItemsMd: GripProps["alignItemsMd"] = "stretch";
  export let alignItemsLg: GripProps["alignItemsLg"] = "stretch";
  export let alignItemsXl: GripProps["alignItemsXl"] = "stretch";
  export let direction: GripProps["direction"] = "row";
  export let directionSm: GripProps["directionSm"] = "row";
  export let directionMd: GripProps["directionMd"] = "row";
  export let directionLg: GripProps["directionLg"] = "row";
  export let directionXl: GripProps["directionXl"] = "row";
  export let justify: GripProps["justify"] = "flex-start";
  export let justifySm: GripProps["justifySm"] = "flex-start";
  export let justifyMd: GripProps["justifyMd"] = "flex-start";
  export let justifyLg: GripProps["justifyLg"] = "flex-start";
  export let justifyXl: GripProps["justifyXl"] = "flex-start";
  export let container: GripProps["container"] = false;
  export let item: GripProps["item"] = false;
  export let spacing: GripProps["spacing"] = 0;
  export let spacingSm: GripProps["spacingSm"] = 0;
  export let spacingMd: GripProps["spacingMd"] = 0;
  export let spacingLg: GripProps["spacingLg"] = 0;
  export let spacingXl: GripProps["spacingXl"] = 0;
  export let wrap: GripProps["wrap"] = "wrap";
  export let wrapSm: GripProps["wrapSm"] = "wrap";
  export let wrapMd: GripProps["wrapMd"] = "wrap";
  export let wrapLg: GripProps["wrapLg"] = "wrap";
  export let wrapXl: GripProps["wrapXl"] = "wrap";
  export let xs: GripProps["xs"] = false;
  export let sm: GripProps["sm"] = false;
  export let md: GripProps["md"] = false;
  export let lg: GripProps["lg"] = false;
  export let xl: GripProps["xl"] = false;
  export let zeroMinWidth: boolean = false;

  $: classes = clsx(
    className,
    "dbx-grid",
    container && "-container",
    item && "-item",
    zeroMinWidth && "-zero-min-width",
    container && spacing !== 0 && `-spacing-xs-${String(spacing)}`,
    container && spacingSm !== 0 && `-spacing-sm-${String(spacingSm)}`,
    container && spacingMd !== 0 && `-spacing-md-${String(spacingMd)}`,
    container && spacingLg !== 0 && `-spacing-lg-${String(spacingLg)}`,
    container && spacingXl !== 0 && `-spacing-xl-${String(spacingXl)}`,
    container && direction !== "row" && `-direction-xs-${String(direction)}`,
    container && directionSm !== "row" && `-direction-sm-${String(directionSm)}`,
    container && directionMd !== "row" && `-direction-md-${String(directionMd)}`,
    container && directionLg !== "row" && `-direction-lg-${String(directionLg)}`,
    container && directionXl !== "row" && `-direction-xl-${String(directionXl)}`,
    container && wrap !== "wrap" && `-wrap-xs-${String(wrap)}`,
    container && wrapSm !== "wrap" && `-wrap-sm-${String(wrapSm)}`,
    container && wrapMd !== "wrap" && `-wrap-md-${String(wrapMd)}`,
    container && wrapLg !== "wrap" && `-wrap-lg-${String(wrapLg)}`,
    container && wrapXl !== "wrap" && `-wrap-xl-${String(wrapXl)}`,
    container && alignItems !== "stretch" && `-align-items-xs-${String(alignItems)}`,
    container && alignItemsSm !== "stretch" && `-align-items-sm-${String(alignItemsSm)}`,
    container && alignItemsMd !== "stretch" && `-align-items-md-${String(alignItemsMd)}`,
    container && alignItemsLg !== "stretch" && `-align-items-lg-${String(alignItemsLg)}`,
    container && alignItemsXl !== "stretch" && `-align-items-xl-${String(alignItemsXl)}`,
    container && alignContent !== "stretch" && `-align-content-xs-${String(alignContent)}`,
    container && alignContentSm !== "stretch" && `-align-content-sm-${String(alignContentSm)}`,
    container && alignContentMd !== "stretch" && `-align-content-md-${String(alignContentMd)}`,
    container && alignContentLg !== "stretch" && `-align-content-lg-${String(alignContentLg)}`,
    container && alignContentXl !== "stretch" && `-align-content-xl-${String(alignContentXl)}`,
    container && justify !== "flex-start" && `-justify-xs-${String(justify)}`,
    container && justifySm !== "flex-start" && `-justify-sm-${String(justifySm)}`,
    container && justifyMd !== "flex-start" && `-justify-md-${String(justifyMd)}`,
    container && justifyLg !== "flex-start" && `-justify-lg-${String(justifyLg)}`,
    container && justifyXl !== "flex-start" && `-justify-xl-${String(justifyXl)}`,
    item && xs && `-xs-${xs}`,
    item && sm && `-sm-${sm}`,
    item && md && `-md-${md}`,
    item && lg && `-lg-${lg}`,
    item && xl && `-xl-${xl}`
  );
</script>

<div {...$$restProps} class={classes}>
  <slot />
</div>

<style src="./styles/grid.scss" global>
</style>
