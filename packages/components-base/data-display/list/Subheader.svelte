<script lang="ts">
  import { clsx } from "../utils";

  let { class: className } = $$props;
  let classes: string | undefined;
  export let color: "default" | "primary" = "default";
  export let inset: boolean = false;
  export let disableSticky: boolean = false;
  export let disableGutters: boolean = false;

  $: classes = clsx(
    className,
    "list-subheader",
    !disableSticky && "-sticky",
    !disableGutters && "-gutters",
    color !== "default" && `-${color}`
  );
</script>

<div {...$$restProps} class={classes}>
  <slot />
</div>
