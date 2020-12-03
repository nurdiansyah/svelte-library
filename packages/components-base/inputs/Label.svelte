<script lang="ts">
  import type { LabelProps } from "./types";

  import { clsx, getId } from "../utils";

  // state
  let className: string | undefined, classes: string;

  // props
  export { className as class };
  export let htmlFor: LabelProps["htmlFor"];
  export let color: LabelProps["color"] = "primary";
  export let disabled: LabelProps["disabled"] = false;
  export let error: LabelProps["error"] = false;
  export let focused: LabelProps["focused"] = false;
  export let required: LabelProps["required"] = false;
  export let label: LabelProps["label"] = undefined;
  export let placement: LabelProps["placement"] = "end";

  // handler

  // reactive
  $: {
    classes = clsx(
      className,
      "dbx-label",
      `-color-${color}`,
      error && `-error`,
      disabled && "-disabled",
      required && "-required",
      focused && "-focused",
      placement !== "end" && `-label-placement-${placement}`
    );
  }
</script>

<style src="./styles/label.scss" global>
</style>

<label {...$$restProps} for={htmlFor} class={classes}>
  <slot />
  {#if label || $$slots['label']}
    <span class="label">
      <slot name="label">{label}</slot>
    </span>
  {/if}
  {#if required}<span class="asterisk">&thinsp;{'*'}</span>{/if}
</label>
