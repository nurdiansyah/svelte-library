<script lang="ts">
  import clsx from "clsx";

  let className: string | null = null,
    classes: string;
  export let id: string | null = null;
  export let itemIndex: number = 0;
  export let activeIndex: number = 0;
  export { className as class };

  $: classes = clsx(className, "carousel-item");
</script>

<div {...$$restProps} {id} class="{classes} active" class:active="{itemIndex === activeIndex}">
  <slot />
</div>
