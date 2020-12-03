<script lang="ts">
  import type { SvelteComponent } from "svelte";
  import type { TextFieldProps, InputProps, LabelProps } from "./types";

  import { clsx, getId } from "../utils";
  import Input from "./Input.svelte";
  import Label from "./Label.svelte";
  import { setFormControlContext } from "./form/form-control-context";

  // props
  export let id: TextFieldProps["id"] = getId({ prefix: "input" });
  export let disabled: TextFieldProps["disabled"] = false;
  export let error: TextFieldProps["error"] = false;
  export let helperText: TextFieldProps["helperText"] = undefined;
  export let inputProps: TextFieldProps["inputProps"] = {};
  export let label: TextFieldProps["label"] = undefined;
  export let margin: TextFieldProps["margin"] = undefined;
  export let required: TextFieldProps["required"] = false;
  export let size: TextFieldProps["size"] = undefined;
  export let variant: TextFieldProps["variant"] = "standard";
  export let fullWidth: TextFieldProps["fullWidth"] = false;
  export let value: TextFieldProps["value"] = undefined;
  export let placeholder: TextFieldProps["placeholder"] = undefined;

  // state
  let labelClasses: string,
    shrink: boolean,
    labelId: string = `label-${id}`,
    helperId: string = `helper-${id}`;
  const state = setFormControlContext();

  $: {
    shrink = $state.adornedStart || $state.focused || $state.filled || typeof placeholder === "string" || false;
    labelClasses = clsx(
      margin && `-margin-${margin}`,
      shrink && "-shrink",
      variant && `-${variant}`,
      size && `-size-${size}`,
      placeholder && "-placeholder"
    );
  }
</script>

<style src="./styles/text-field.scss" global>
</style>

<div class="text-field" class:-full-width={fullWidth}>
  <Label htmlFor={id} id={labelId} class={labelClasses} {label} {required} {disabled} {error} />
  <Input
    {id}
    {...$$restProps}
    {...inputProps}
    labelOutlined={label}
    {placeholder}
    {margin}
    {variant}
    {size}
    {disabled}
    {fullWidth}
    {error}
    {value}
    aria-describedby={labelId}>
    <slot />
  </Input>

  {#if helperText}
    <div class="helper-text" id={helperId}>{helperText}</div>
  {/if}
</div>
