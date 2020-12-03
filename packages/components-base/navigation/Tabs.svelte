<script lang="ts">
  import { clsx } from "../utils";

  // props

  // state
  let { class: className } = $$props;
  let classes;

  // handler

  // reactive
  $: classes = clsx(className, "dbx-tabs");
</script>

<div {...$$restProps} class={classes}>
  <slot />
</div>

<style src="./styles/tabs.scss" global>
</style>
