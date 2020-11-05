<script lang="ts">
  import { clsx } from "../utils";

  let { class: className } = $$props;
  let classes: string | undefined;
  export let autoFocus: boolean = false;
  export let autoWidth: boolean = false;
  export let defaultValue: string | undefined = undefined;
  export let disabled: boolean = false;
  export let displayEmpty: boolean = false;
  export let multiple: boolean = false;
  export let name: string;
  export let MenuProps: Record<string, any> = {};
  export let onChange: (e: Event) => any = () => {};

  $: classes = clsx(className);
</script>

<div class={classes} on:change={onChange}>
  <slot />
</div>

<style src="./select.scss" global>
</style>
