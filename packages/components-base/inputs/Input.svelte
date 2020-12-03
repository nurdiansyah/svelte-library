<script lang="ts">
  import type { InputProps } from "./types";

  import Icon from "@deboxsoft/svelte-components-base/data-display/Icon.svelte";
  import IconArrowDropDown from "@deboxsoft/svelte-icons/ArrowDropDown.svelte";
  import { clsx } from "../utils";
  import { isFilled } from "./form/utils";
  import NotchedOutline from "./NotchedOutline.svelte";
  import { getFormControl } from "./form/form-control-context";

  // props
  export { className as class };
  export let color: InputProps["color"] = "primary";
  export let disabled: InputProps["disabled"] = false;
  export let error: InputProps["error"] = false;
  export let focused: InputProps["focused"] = false;
  export let fullWidth: InputProps["fullWidth"] = false;
  export let inputProps: InputProps["inputProps"] = {};
  export let labelOutlined: InputProps["labelOutlined"] = undefined;
  export let margin: InputProps["margin"] = undefined;
  export let multiline: InputProps["multiline"] = false;
  export let multiple: InputProps["multiple"] = false;
  export let placeholder: InputProps["placeholder"] = undefined;
  export let plaintext: InputProps["plaintText"] = false;
  export let readOnly: InputProps["readOnly"] = plaintext;
  export let type: InputProps["type"] = "text";
  export let underlineDisable: InputProps["underlineDisable"] = false;
  export let value: any = "";
  export let variant: InputProps["variant"] = "standard";

  // state
  let className: string = "";
  let outlinedProps: Record<string, any> = {};
  let classes: string | undefined;
  let notched: boolean;
  let context = getFormControl();
  const state = context.state;

  const setNotch = (value: any) => {
    if (isFilled(value)) {
      state.update((s) => ({ ...s, filled: true }));
      notched = true;
    } else {
      state.update((s) => ({ ...s, filled: false }));
      notched = focused || typeof placeholder === "string" || false;
    }
  };

  // handlers
  const handleInput = (e: any) => {
    value = type?.match(/^(number|range)$/) ? +e.target.value : e.target.value;
    setNotch(value);
  };

  const handleFocus = (e: any) => {
    focused = true;
    setNotch(e.target.value);
    state.update((s) => ({ ...s, focused: true }));
  };

  const handleBlur = (e: any) => {
    focused = false;
    setNotch(e.target.value);
    state.update((s) => ({ ...s, focused: false }));
  };

  $: classes = clsx(
    className,
    "dbx-input",
    color !== "primary" && `-color-${color}`,
    disabled && "-disabled",
    error && "-error",
    focused && "-focused",
    fullWidth && "-full-width",
    margin === "dense" && "-margin-dense",
    multiline && "-multiline", // textarea,
    multiple && "-multiple",
    plaintext && "-plaintext",
    !underlineDisable && variant !== "outlined" && `-underline`,
    type === "search" && "-search",
    type === "select" && "-select", // select
    variant !== "standard" && `-${variant}`,
    $$slots["start-adornment"] && "-adorned-start",
    $$slots["end-adornment"] && "-adorned-end"
  );
  $: $state.adornedStart = $$slots["start-adornment"];
  $: setNotch(value);
</script>

<style src="./styles/input.scss" global>
</style>

<div class={classes}>
  <slot name="start-adornment" />
  {#if type === 'textarea' || multiline}
    <textarea
      class="input"
      {...$$restProps}
      {placeholder}
      {disabled}
      {readOnly}
      on:blur={handleBlur}
      on:focus={handleFocus}
      on:blur
      on:focus
      on:keydown
      on:keypress
      on:keyup
      on:change
      on:input
      on:input={handleInput}>
      <slot>
      {value}
      </slot>
    </textarea>
  {:else if type === 'select'}
    <select
      class="input"
      {...$$restProps}
      {placeholder}
      {multiple}
      {disabled}
      aria-describedby={$$props['aria-describedby']}
      on:blur={handleBlur}
      on:focus={handleFocus}
      on:blur
      on:focus
      on:keydown
      on:keypress
      on:keyup
      on:change
      on:input
      on:input={handleInput}>
      <slot {value} />
    </select>
    {#if !multiple}
      <Icon component={IconArrowDropDown} class="icon" />
    {/if}
  {:else}
    <input
      class="input"
      {...$$restProps}
      {...inputProps}
      {placeholder}
      {value}
      {type}
      {readOnly}
      {disabled}
      on:blur={handleBlur}
      on:focus={handleFocus}
      on:blur
      on:focus
      on:keydown
      on:keypress
      on:keyup
      on:change
      on:input
      on:input={handleInput} />
  {/if}
  {#if variant === 'outlined'}
    <NotchedOutline label={labelOutlined} {...outlinedProps} {notched} />
  {/if}
  <slot name="end-adornment" />
</div>
