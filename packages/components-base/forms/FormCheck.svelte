<script lang="ts">
  import clsx from "clsx";
  import { getId } from "../utils";

  let className: string | null = null,
    classes: string;
  export { className as class };
  export let disabled: boolean = false;
  export let inline: boolean = false;
  export let type: "radio" | "checkbox" | "switch" = "checkbox";
  export let id = getId();

  $: classes = clsx(className, "form-check", inline && "-inline", disabled && "-disabled");
</script>

{#if type === 'radio'}
  <input {...$$restProps} id="rad-{id}" type="radio" {disabled} />
{:else}
  <input {...$$restProps} id="cb-{id}" {type} {disabled} />
{/if}

<style lang="scss" global>
  @use "./form-check";
</style>
