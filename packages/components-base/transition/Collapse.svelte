<script lang="ts">
  import clsx from "clsx";

  import { createEventDispatcher } from "svelte";
  import { slide } from "svelte/transition";
  const noop = () => undefined;

  export let show: boolean = false;
  let className: string | null = null,
    classes: string;
  export { className as class };
  export let onEntering: (e?: Event) => any = noop;
  export let onEntered: (e?: Event) => any = noop;
  export let onExiting: (e?: Event) => any = noop;
  export let onExited: (e?: Event) => any = noop;

  $: classes = clsx(className, "collapse", show && "-show");
</script>

<div
  {...$$restProps}
  class="{classes}"
  transition:slide|local
  on:introstart
  on:introend
  on:outrostart
  on:outroend
  on:introstart="{onEntering}"
  on:introend="{onEntered}"
  on:outrostart="{onExiting}"
  on:outroend="{onExited}">
  <slot />
</div>

<style lang="scss" global>
  .collapse:not(.-show) {
    display: none;
  }
</style>
