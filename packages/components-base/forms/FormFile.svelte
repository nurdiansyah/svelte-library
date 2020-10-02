<script lang="ts">
  import clsx from "clsx";
  import { getId } from "../utils";

  let className: string | null = null,
    classes: string;
  export { className as class };
  export let id: string = getId();
  export let disabled: boolean = false;

  $: classes = clsx(className, "form-file", disabled && "-disabled");
</script>

<input {...$$restProps} class="{classes}" {id} {disabled} />

<style lang="scss" global>
  @use "./form-file";
</style>
