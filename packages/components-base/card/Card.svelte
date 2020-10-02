<script lang="ts">
  import clsx from "clsx";

  let className: string | null = null,
    classes: string;
  export { className as class };
  export let body: boolean = false;
  export let color: string | null = null;
  export let inverse: boolean = false;
  export let outline: boolean = false;
  export let style: string | null = null;

  $: classes = clsx(
    className,
    "card",
    inverse ? "text-white" : false,
    body ? "card-body" : false,
    color ? `${outline ? "border" : "bg"}-${color}` : false
  );
</script>

<div {...$$restProps} class="{classes}" on:click {style}>
  <slot />
</div>

<style lang="scss" global>
  @use "./card.scss";
</style>
