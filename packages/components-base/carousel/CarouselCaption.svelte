<script lang="ts">
  import clsx from "clsx";

  let className: string | null = null,
    classes: string;
  export { className as class };
  export let id: string | null = null;
  export let captionHeader: string | null = null;
  export let captionText: string | null = null;

  $: classes = clsx(className, "carousel-caption", "d-none", "d-md-block");
</script>

<div {...$$restProps} {id} class="{classes}">
  <h5>{captionHeader}</h5>
  <p>{captionText}</p>
  <slot />
</div>
