<script lang="ts">
  import type { SvelteComponent } from "svelte";
  import type { TextFieldProps, InputProps, LabelProps, SelectProps } from "./types";

  import { clsx } from "../utils";
  import Input from "./Input.svelte";
  import Label from "./Label.svelte";

  // props
  export let error: TextFieldProps["error"] = false;
  export let helperText: TextFieldProps["helperText"] = undefined;
  export let inputProps: TextFieldProps["inputProps"] = {};
  export let label: TextFieldProps["label"] = undefined;
  export let margin: TextFieldProps["margin"] = undefined;
  export let required: TextFieldProps["required"] = false;
  export let size: TextFieldProps["size"] = undefined;
  export let variant: TextFieldProps["variant"] = "standard";

  // state
  let { class: className } = $$props;
  let classes: string | undefined;
  let Component: typeof SvelteComponent;

  if (process.env.NODE_ENV !== "production") {
    if (select && $$slots["default"]) {
      console.error("Debox: `slot` default must be passed when using `TextField` component with `select`.");
    }
  }
</script>

<Input {...$$restProps} {...inputProps} labelOutlined={label} {margin} {variant} {size} />
