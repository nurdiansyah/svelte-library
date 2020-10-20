<script lang="ts">
  import Scrollbar from "./scrollbar";
  import { clsx } from "./clsx";

  let { class: className } = $$props;
  let classes: string;

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

<div use:useScrollbar={options} class={classes} style="--height: {height}">
  <slot />
</div>

<style src="./styles/scrollbar.scss" global>
</style>
