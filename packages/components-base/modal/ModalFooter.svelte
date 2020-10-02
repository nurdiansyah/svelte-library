<script lang="ts">
  import clsx from "clsx";

  let className: string | null = null,
    classes: string;
  export { className as class };

  $: classes = clsx(className, "modal-footer");
</script>

<div {...$$restProps} class="{classes}">
  <slot />
</div>
