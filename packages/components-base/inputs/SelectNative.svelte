<script lang="ts">
  import { clsx } from "../utils";

  let { class: className } = $$props;
  let classes: string | undefined;
  export let disabled: boolean = false;
  export let open: boolean = false;
  export let variant: "filled" | "standard" | "outlined" = "standard";
  export let value: any;

  $: {
    classes = clsx(className, "dbx-select", disabled && "-disabled", variant !== "standard" && `-${variant}`);
    iconClasses = clsx("dbx-select-icon", disabled && "-disabled", variant !== "standard" && `-${variant}`);
  }
</script>

<select class={classes} bind:value>
  <slot />
</select>

<style src="./select.scss" global>
</style>
