<script lang="ts">
  import { clsx } from "../utils";

  let { class: className } = $$props;
  let classes: string | undefined;
  export let fixed: boolean = false;
  export let disableGutters: boolean = false;
  export let maxWidth: "sm" | "md" | "lg" | "xl" = "lg";

  $: classes = clsx(
    className,
    "dbx-container",
    disableGutters && "-disable-gutters",
    fixed && "-fixed",
    maxWidth && `-max-width-${maxWidth}`
  );
</script>

<div class={classes} {...$$restProps}>
  <slot />
</div>

<style src="./styles/container.scss">
</style>
