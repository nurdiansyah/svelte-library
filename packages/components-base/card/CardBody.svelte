<script lang="ts">
  import clsx from "clsx";

  let className: string | null = null,
    classes: string;
  export { className as class };
  export let id: string | null = null;

  $: classes = clsx(className, "card-body");
</script>

<div {...$$restProps} {id} class="{classes}">
  <slot />
</div>
