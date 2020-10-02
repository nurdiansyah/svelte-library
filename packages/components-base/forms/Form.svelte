<script lang="ts">
  import clsx from "clsx";

  let className: string | null = null,
    classes: string;
  export { className as class };
  export let inline;
  export let validated;

  $: classes = clsx("c-form", className, inline && "-inline", validated && "-validated");
</script>

<form {...$$restProps} class="{classes}" on:submit>
  <slot />
</form>

<style lang="scss" global>
  @use "./form";
</style>
