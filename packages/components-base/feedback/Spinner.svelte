<script lang="ts">
  import { clsx } from "../utils";

  let { class: className } = $$props;
  let classes: string | undefined;
  export let type = "border";
  export let size: string | undefined = undefined;
  export let color: string | undefined = undefined;

  $: classes = clsx(
    className,
    size ? `spinner-${type}-${size}` : false,
    `spinner-${type}`,
    color ? `text-${color}` : false
  );
</script>

<div {...$$restProps} role="status" class={classes}>
  <span class="sr-only">
    <slot>Loading...</slot>
  </span>
</div>

<style lang="scss" global>
  @use "./spinners.scss";
</style>
