<script lang="ts">
  import { clsx } from "../utils";

  let { class: className } = $$props;
  let classes: string | undefined;
  export let elevation: number = 2;
  export let variant: "elevation" | "outlined" = "elevation";
  export let square: boolean = false;
  export let noBorder: boolean = false;
  export let inherit: boolean = false;

  $: classes = clsx(
    className,
    "dbx-paper",
    !square && "-rounded",
    variant === "elevation" && `-elevation-${elevation}`,
    variant === "outlined" && "-outlined",
    !noBorder && "-bordered",
    inherit && "-color-inherit"
  );
</script>

<div {...$$restProps} class={classes} data-testid="paper">
  <slot />
</div>

<style src="./styles/paper.scss" global>
</style>
