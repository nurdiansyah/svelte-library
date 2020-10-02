<script lang="ts">
  import clsx from "clsx";

  let className: string | null = null,
    classes: string;
  export { className as class };
  export let body: boolean = false;
  export let bottom: boolean = false;
  export let heading: boolean = false;
  export let left: boolean = false;
  export let list: boolean = false;
  export let middle: boolean = false;
  export let object: boolean = false;
  export let right: boolean = false;
  export let top: boolean = false;
  export let href: string | null = null;
  export let src: string | null = null;
  export let alt: string | null = null;

  $: classes = clsx(className, {
    "media-body": body,
    "media-heading": heading,
    "media-left": left,
    "media-right": right,
    "media-top": top,
    "media-bottom": bottom,
    "media-middle": middle,
    "media-object": object,
    "media-list": list,
    media: !body && !heading && !left && !right && !top && !bottom && !middle && !object && !list
  });
</script>

{#if heading}
  <h4 {...$$restProps} class="{classes}">
    <slot />
  </h4>
{:else if href}
  <a {...$$restProps} class="{classes}" {href}>
    <slot />
  </a>
{:else if src || object}
  <img {...$$restProps} class="{classes}" {src} {alt} />
{:else if list}
  <ul {...$$restProps} class="{classes}">
    <slot />
  </ul>
{:else}
  <div {...$$restProps} class="{classes}">
    <slot />
  </div>
{/if}
