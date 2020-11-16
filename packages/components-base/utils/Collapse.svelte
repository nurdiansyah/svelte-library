<script lang="ts">
  import { clsx } from "./clsx";

  import { createEventDispatcher } from "svelte";
  import { slide } from "svelte/transition";
  const noop = () => undefined;

  export let show: boolean = false;
  let { class: className } = $$props;
  let classes: string | undefined;
  export let onEntering: (e?: Event) => any = noop;
  export let onEntered: (e?: Event) => any = noop;
  export let onExiting: (e?: Event) => any = noop;
  export let onExited: (e?: Event) => any = noop;

  $: classes = clsx(className, "dbx-collapse", show && "-show");
</script>

<div
  {...$$restProps}
  class={classes}
  transition:slide|local
  on:introstart
  on:introend
  on:outrostart
  on:outroend
  on:introstart={onEntering}
  on:introend={onEntered}
  on:outrostart={onExiting}
  on:outroend={onExited}>
  <slot />
</div>

<style lang="scss" global>
  .dbx-collapse:not(.-show) {
    display: none;
  }
</style>
