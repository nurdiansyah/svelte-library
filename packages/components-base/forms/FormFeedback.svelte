<script lang="ts">
  import clsx from "clsx";

  let className: string | null = null,
    classes: string;
  export { className as class };
  export let tooltip: boolean = false;
  export let state: string | null = null;

  $: classes = clsx(className, "form-feedback", state && `-${state}`, tooltip && "-tooltip");
</script>

<div {...$$restProps} class="{classes}">
  <slot />
</div>
