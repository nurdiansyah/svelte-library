<script lang="ts">
  import Scrollbar from "./perfect-scrollbar";
  import clsx from "clsx";

  let classes: string, className: string;

  export { className as class };
  export let height: string = "100%";
  export let options: any = {};

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

<div use:useScrollbar="{options}" class="{classes}" style="--height: {height}">
  <slot />
</div>

<style lang="scss" global>
  @use "./scrollbar";
</style>
