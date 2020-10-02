<script lang="ts">
  import clsx from "clsx";

  let className: string | null = null,
    classes: string;
  export { className as class };
  export let flush: boolean = false;

  $: classes = clsx(className, "list-group", flush ? "list-group-flush" : false);
</script>

<ul {...$$restProps} class="{classes}">
  <slot />
</ul>

<style lang="scss" global>
  @use "./list-group.scss";
</style>
