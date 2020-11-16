<script lang="ts">
  import type { AvatarProps } from "./types";

  import { clsx } from "../utils";
  import { onMount } from "svelte";
  import Person from "@deboxsoft/svelte-icons/Person.svelte";

  let { class: className } = $$props;
  let classes: string | undefined;
  let hasImgNotFailing: boolean = false;
  let loaded: "loaded" | "error" | undefined = undefined;
  let active: boolean = false;
  let hasImg: boolean;
  let _tmp: any;

  export let alt: AvatarProps["alt"] = undefined;
  export let variant: AvatarProps["variant"] = "circle";
  export let src: AvatarProps["src"] = undefined;
  export let srcSet: AvatarProps["srcSet"] = undefined;
  export let imgProps: AvatarProps["imgProps"] = {};
  onMount(() => {
    active = true;
  });

  const loadingImage = () => {
    let active = true;
    const image = new Image();
    src && (image.src = src);
    srcSet && (image.srcset = srcSet);
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
    hasImg = src || srcSet ? true : false;
    if (hasImg) {
      if (_tmp.src !== src || _tmp.srcSet === srcSet) {
        loaded = undefined;
      }
      if (!loaded) {
        loadingImage();
      }
    }
    hasImgNotFailing = hasImg && loaded !== "error";
    classes = clsx(className, "dbx-avatar", !hasImgNotFailing && `-color-default`, variant && `-${variant}`);
  }
</script>

<div {...$$restProps} class={classes}>
  {#if hasImgNotFailing}
    <img {...imgProps} {src} {srcSet} {alt} />
  {:else if !loaded}
    <Person />
  {/if}
  <slot />
</div>

<style src="./styles/avatar.scss" global>
</style>
