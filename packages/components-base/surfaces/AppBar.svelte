<script lang="ts">
  import { clsx } from "../utils";
  import Paper from "./Paper.svelte";

  let { class: className } = $$props;
  let classes: string | undefined;
  export let position: "fixed" | "absolute" | "sticky" | "static" | "relative" = "fixed";
  export let color: "default" | "inherit" | "primary" | "secondary" | "transparent" = "primary";

  $: classes = clsx(className, "app-bar", position && `-position-${position}`, color && `-color-${color}`);
</script>

<div class={classes} {...$$restProps}>
  <Paper square elevation={4} noBorder inherit>
    <slot />
  </Paper>
</div>

<style src="./styles/app-bar.scss" global>
</style>
