<script lang="ts">
  import { clsx } from "../utils";

  let { class: className } = $$props;
  let classes: string | undefined;

  $: classes = clsx(className, "dbx-breadcrumb");
</script>

<div {...$$restProps} class={classes}>
  <slot />
</div>

<style src="./breadcrumb.scss" global>
</style>
