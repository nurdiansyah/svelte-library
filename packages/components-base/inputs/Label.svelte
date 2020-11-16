<script lang="ts">
  import type { LabelProps } from "./types";

  import { clsx, getId } from "../utils";

  // state
  let { class: className } = $$props;
  let classes: string;

  // props
  export let color: LabelProps["color"] = "primary";
  export let disabled: LabelProps["disabled"] = false;
  export let error: LabelProps["error"] = false;
  export let focused: LabelProps["focused"] = false;
  export let required: LabelProps["required"] = false;
  export let label: LabelProps["label"] = undefined;
  export let placement: LabelProps["placement"] = "end";

  // handler

  // reactive
  $: classes = clsx(
    className,
    "form-label",
    `-color-${color}`,
    error && `-error`,
    disabled && "-disabled",
    required && "-required",
    focused && "-focused",
    placement !== "end" && `-label-placement-${labelPlacement}`
  );
</script>

<label {...$$restProps} class={classes}>
  <slot />
  {#if label || $$slots['label']}
    <span class="label">
      <slot name="label">{label}</slot>
    </span>
  {:else if required}<span class="asterisk">&thinsp;{'*'}</span>{/if}
</label>
