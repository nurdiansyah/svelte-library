<script lang="ts">
  import clsx from "clsx";

  let className: string | null = null,
    classes: string;
  export { className as class };

  $: classes = clsx(className, "card-text");
</script>

<p {...$$restProps} class="{classes}">
  <slot />
</p>
