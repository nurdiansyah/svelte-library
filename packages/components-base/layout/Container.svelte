<script lang="ts">
  import type { Container } from "./types";

  import { clsx } from "../utils";

  let { class: className } = $$props;
  let classes: string | undefined;
  export let fixed: Container["fixed"] = false;
  export let guttersDisable: Container["guttersDisable"] = false;
  export let maxWidth: Container["maxWidth"] = "lg";

  $: classes = clsx(
    className,
    "dbx-container",
    guttersDisable && "-disable-gutters",
    fixed && "-fixed",
    maxWidth && `-max-width-${maxWidth}`
  );
</script>

<div class={classes} {...$$restProps}>
  <slot />
</div>

<style src="./styles/container.scss">
</style>
