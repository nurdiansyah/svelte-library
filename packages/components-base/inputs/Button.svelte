<script lang="ts">
  import type { SvelteComponent } from "svelte/internal";

  import { clsx } from "../utils";
  import { getId } from "../utils";
  import ButtonBase from "./ButtonBase.svelte";

  let { class: className } = $$props;
  let classes: string;
  let startIconClasses: string;
  let endIconClasses: string | undefined;

  export let color: "default" | "inherit" | "primary" | "secondary" = "default";
  export let disabled: boolean = false;
  export let size: "small" | "large" | "medium" = "medium";
  export let variant: "text" | "outlined" | "contained" = "text";
  export let fullWidth: boolean = false;
  export let startIcon: typeof SvelteComponent | undefined = undefined;
  export let endIcon: typeof SvelteComponent | undefined = undefined;

  $: {
    classes = clsx(
      className,
      "-button",
      disabled && "-disabled",
      size !== "medium" && `-size-${size}`,
      `-${variant}`,
      fullWidth && "-full-width",
      color !== "default" && `-color-${color}`
    );
  }
</script>

<ButtonBase {...$$restProps} class={classes} {disabled} on:click on:blur on:focus>
  <svelte:component this={startIcon} class="start-icon" />
  <slot />
  <svelte:component this={endIcon} class="end-icon" />
</ButtonBase>

<style src="./styles/button.scss" global>
</style>
