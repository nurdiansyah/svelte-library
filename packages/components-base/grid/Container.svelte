<script lang="ts">
  import clsx from "clsx";

  let className: string | null = null,
    classes: string;
  export { className as class };
  export let fixed: boolean = false;
  export let disableGutters: boolean = false;
  export let maxWidth: "sm" | "md" | "lg" | "xl" = "lg";

  $: classes = clsx(
    className,
    "dbx-container",
    disableGutters && "-disable-gutters",
    maxWidth && `-max-width-${maxWidth}`
  );
</script>

<div class="{classes}" {...$$restProps}>
  <slot />
</div>

<style src="./container.scss">
</style>
