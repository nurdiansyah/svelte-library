<script lang="ts">
  import { clsx } from "../utils";

  let { class: className } = $$props;
  let classes: string | undefined;
  // export let name: string;
  // export let label: string | undefined = undefined;
  // export let color: "primary" | "secondary" | undefined = undefined;
  // export let defaultValue: string | undefined = undefined;
  // export let disabled: boolean = false;
  // export let error: boolean = false;
  // export let fullWidth: boolean = false;
  // export let multiline: boolean = false;
  // export let required: boolean = false;
  // export let select: boolean = false;
  // export let size: "sm" | "lg" | undefined = undefined;
  // export let rows: number | string | undefined = undefined;

  // export let placeholder: string | undefined = undefined;
  // export let helperText: string | undefined = undefined;
  // export let id: string | undefined = undefined;
  // export let margin: "dense" | "none" | undefined = undefined;
  // export let variant: "filled" | "outlined" | undefined = undefined;
  // export let maxRow: number | string | undefined = undefined;
  // export let minRow: number | string | undefined = undefined;

  if (process.env.NODE_ENV !== "production") {
    if (select && $$slots["default"]) {
      console.error("Debox: `slot` default must be passed when using `TextField` component with `select`.");
    }
  }

  $: {
    classes = clsx(className, "text-field");
  }
</script>

<!--  -->
<input class="{classes}" />

<style lang="scss" src="./styles/text-field.scss">
</style>
