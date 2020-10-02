<script lang="ts">
  import clsx from "clsx";

  let className: string | null = null,
    classes: string,
    props: any;
  export { className as class };
  export let active: boolean = false;

  $: classes = clsx(className, "item", active && "-active");
  $: props = {
    "aria-current": active && "page"
  };
</script>

<li {...$$restProps} class="{classes}" {...props}>
  <slot />
</li>
