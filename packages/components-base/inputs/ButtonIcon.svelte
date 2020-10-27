<script lang="ts">
  import { clsx } from "../utils";
  import ButtonBase from "./ButtonBase.svelte";

  // state
  let { class: className } = $$props;
  let classes: string;

  // props
  export let color: "default" | "inherit" | "primary" | "secondary" = "default";
  export let disabled: boolean = false;
  export let size: "small" | "large" | "medium" = "medium";
  export let edge: "start" | "end" | undefined = undefined;
  export let disableFocusRipple: boolean = false;

  // handler

  // reactive
  $: classes = clsx(
    className,
    "-icon",
    disabled && "-disabled",
    size !== "medium" && `-size-${size}`,
    color !== "default" && `-color-${color}`,
    edge && `-edge-${edge}`
  );
</script>

<ButtonBase
  {...$$restProps}
  class={classes}
  {disabled}
  focusRippleEnable={!disableFocusRipple}
  on:click
  on:blur
  on:focus>
  <span class="label">
    <slot />
  </span>
</ButtonBase>

<style src="./styles/button-icon.scss" global>
</style>
