<script lang="ts">
  import clsx from "clsx";

  let className: string | null = null,
    classes: string;
  export { className as class };
  export let inline: boolean = false;
  export let color: string | null = null;

  $: classes = clsx(className, !inline && "form-text");
</script>

<small {...$$restProps} class="{classes}" style="{color && `--form-text-color: ${color};`}">
  <slot />
</small>
