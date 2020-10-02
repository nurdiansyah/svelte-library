<script lang="ts">
  import clsx from "clsx";

  let className: string | null = null,
    classes: string;
  export { className as class };
  export let active: boolean = false;

  $: classes = clsx(className, "nav-item", active ? "active" : false);
</script>

<li {...$$restProps} class="{classes}">
  <slot />
</li>
