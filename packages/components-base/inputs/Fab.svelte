<script lang="ts">
  import { clsx } from "../utils";
  import ButtonBase from "./ButtonBase.svelte";

  let { class: className } = $$props;
  let classes: string | undefined;
  export let disableFocusRipple: boolean = false;
  export let size: "small" | "medium" | "large" = "large";
  export let color: "default" | "inherit" | "primary" | "secondary" = "default";
  export let variant: "extended" | "round" = "round";
  export let disabled: boolean = false;
  $: classes = clsx(
    className,
    "dbx-fab",
    disabled && "-disabled",
    size !== "default" && `-size-${size}`,
    color && `-color-${color}`,
    variant === "extended" && "-extended"
  );
</script>

<ButtonBase {...$$restProps} class={classes} {disabled} focusRipple={!disableFocusRipple}>
  <span class="label">
    <slot />
  </span>
</ButtonBase>

<style src="./dbx-fab.scss" global>
</style>
