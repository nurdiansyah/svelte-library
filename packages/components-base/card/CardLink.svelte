<script lang="ts">
  import clsx from "clsx";

  let className: string | null = null,
    classes: string;
  export { className as class };
  export let href: string | null = null;

  $: classes = clsx(className, "card-link");
</script>

<a {...$$restProps} class="{classes}" {href}>
  <slot />
</a>
