<script lang="ts">
  import clsx from "clsx";
  import { getId } from "../utils";

  type Value = { id: string; label: string; value: any };

  let className: string | null = null,
    classes: string;
  export { className as class };
  export let values: Value[] = [];
  export let selected: Value | Value[];
  export let id: string = getId();
  export let disabled: boolean = false;
  export let onChange: (e: Event) => any;

  $: classes = clsx(className, "form-select", disabled && "-disabled");
</script>

<select
  {...$$restProps}
  class="{classes}"
  {id}
  {disabled}
  bind:value="{selected}"
  on:blur="{onChange}"
  on:change="{onChange}">
  {#each values as value}
    <option {value}>{value.label}</option>
  {/each}
</select>

<style lang="scss">
  @use "./form-select";
</style>
