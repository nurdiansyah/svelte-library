<script lang="ts">
  import { clsx } from "../utils";

  let { class: className } = $$props;
  let displayValue: string;
  let exited: boolean;
  let classes: string | undefined;

  export let anchorOrigin: { horizontal: "left" | "right"; vertical: "top" | "bottom" } = {
    horizontal: "right",
    vertical: "top"
  };
  export let color: "default" | "error" | "primary" | "secondary" = "default";
  export let badgeContent: string | number | undefined = undefined;
  export let invisible: boolean = false;
  export let showZero: boolean = true;
  export let max: number = 99;
  export let overlap: "rectangle" | "circle" = "rectangle";
  export let variant: "dot" | "standard" = "standard";

  $: {
    let _invisible = invisible;
    if ((!invisible && badgeContent === 0 && !showZero) || (badgeContent !== null && variant !== "dot")) {
      _invisible = true;
    }

    if (variant !== "dot" && badgeContent) {
      displayValue = typeof badgeContent === "number" && badgeContent > max ? `${max}+` : String(badgeContent);
    }
    classes = clsx(
      className,
      "dbx-badge",
      `-anchor-origin-${anchorOrigin.vertical}-${anchorOrigin.horizontal}-${overlap}`,
      `-color-${color}`,
      variant === "dot" && "-dot"
    );
  }
</script>

<div {...$$restProps} class={classes}>
  <slot />
  <span class="badge"> {displayValue} </span>
</div>

<style src="./styles/badge.scss" global>
</style>
