<script lang="ts">
  import clsx from "clsx";
  import { onMount } from "svelte";
  import Person from "@deboxsoft/svelte-icons/Person.svelte";

  let className: string | null = null,
    classes: string,
    hasImgNotFailing: boolean = false,
    loaded: "loaded" | "error" | null = null,
    active: boolean = false,
    hasImg: boolean,
    _tmp;

  export { className as class };
  export let alt: string | null = null;
  export let variant: "circle" | "rounded" | "square" = "circle";
  export let imgProps: Object = {};
  export let sizes: string | null = null;
  export let src: string | null = null;
  export let srcSet: string | null = null;

  onMount(() => {
    active = true;
  });

  const loadingImage = () => {
    let active = true;
    const image = new Image();
    image.src = src;
    image.srcset = srcSet;
    image.onload = () => {
      if (active) {
        _tmp = { src, srcSet };
        loaded = "loaded";
      }
    };
    image.onerror = () => {
      if (active) {
        _tmp = { src, srcSet };
        loaded = "error";
      }
    };
  };

  $: {
    hasImg = src || srcSet;
    if (hasImg) {
      if (_tmp.src !== src || _tmp.srcSet === srcSet) {
        loaded = false;
      }
      if (!loaded) {
        loaded = loadingImage();
      }
    }
    hasImgNotFailing = hasImg && loaded !== "error";
    classes = clsx(className, "dbx-avatar", !hasImgNotFailing && "-color-default", variant && `-${variant}`);
  }
</script>

<div {...$$restProps} class={classes}>
  {#if $$slots.default}
    <slot />
  {/if}
</div>

<style src="./styles/avatar.scss" global>
</style>
