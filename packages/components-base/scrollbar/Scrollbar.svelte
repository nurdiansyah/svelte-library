<script lang="ts">
  import Scrollbar from "./perfect-scrollbar";
  import clsx from "clsx";
  import { onMount, afterUpdate, onDestroy } from "svelte";

  let scrollbar, Container, classes, className;

  export { className as class };
  export let height = "100%";
  export let options = {};

  $: classes = clsx(className);

  const useScrollbar = (node: HTMLElement, options = {}) => {
    const scrollbar = new Scrollbar(node, options);
    return {
      update() {
        scrollbar.update();
      },
      destroy() {
        scrollbar.destroy();
      }
    };
  };
</script>

<style lang="scss" global>
  @use "./scrollbar";
</style>

<div use:useScrollbar="{options}" class="{classes}" style="--height: {height}">
  <slot />
</div>
