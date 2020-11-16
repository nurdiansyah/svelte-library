<script lang="ts">
  import type { SvelteComponent } from "svelte/internal";
  import type { InputProps } from "./types";

  import Icon from "@deboxsoft/svelte-components-base/data-display/Icon.svelte";
  import IconArrowDropDown from "@deboxsoft/svelte-icons/ArrowDropDown.svelte";
  import { clsx } from "../utils";
  import NotchedOutline from "./NotchedOutline.svelte";

  // props
  export let color: InputProps["color"] = "primary";
  export let disabled: InputProps["disabled"] = false;
  export let focused: InputProps["focused"] = false;
  export let fullWidth: InputProps["fullWidth"] = false;
  export let inputProps: InputProps["inputProps"] = {};
  export let labelOutlined: InputProps["labelOutlined"] = undefined;
  export let margin: InputProps["margin"] = undefined;
  export let multiline: InputProps["multiline"] = false;
  export let multiple: InputProps["multiple"] = false;
  export let outlinedProps: InputProps["outlinedProps"] = {};
  export let plaintext: InputProps["plaintext"] = false;
  export let readOnly: InputProps["readOnly"] = plaintext;
  export let type: InputProps["type"] = "text";
  export let underlineDisable: InputProps["underlineDisable"] = false;
  export let value: any = "";
  export let variant: InputProps["variant"] = "standard";

  // state
  let { class: className } = $$props;
  let classes: string | undefined;

  // handlers
  const handleInput = (e) => {
    value = type.match(/^(number|range)$/) ? +e.target.value : e.target.value;
  };

  const handleFocus = () => {
    focused = true;
  };

  const handleBlur = () => {
    focused = false;
  };

  $: classes = clsx(
    className,
    "dbx-input",
    color !== "primary" && `-color-${color}`,
    disabled && "-disabled",
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
</script>

<div class={classes}>
  <slot name="start-adornment" />
  {#if type === 'textarea' || multiline}
    <textarea
      class="input"
      {...$$restProps}
      {disabled}
      {readOnly}
      on:blur={handleBlur}
      on:focus={handleFocus}
      on:keydown
      on:keypress
      on:keyup
      on:change
      on:input>
      <slot>
      {value}
      </slot>
    </textarea>
  {:else if type === 'select'}
    <select
      class="input"
      {...$$restProps}
      {multiple}
      {disabled}
      on:blur={handleBlur}
      on:focus={handleFocus}
      on:keydown
      on:keypress
      on:keyup
      on:change
      on:input>
      <slot />
    </select>
    {#if !multiple}
      <Icon component={IconArrowDropDown} class="icon" />
    {/if}
  {:else}
    <input
      class="input"
      {...$$restProps}
      {...inputProps}
      {value}
      {type}
      {readOnly}
      on:blur={handleBlur}
      on:focus={handleFocus}
      on:keydown
      on:keypress
      on:keyup
      on:change
      on:input={handleInput} />
  {/if}
  {#if variant === 'outlined'}
    <NotchedOutline {labelOutlined} {...outlinedProps} />
  {/if}
  <slot name="end-adornment" />
</div>

<style src="./styles/input.scss" global>
</style>
