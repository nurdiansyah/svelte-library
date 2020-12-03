

<script lang="ts">
  import { clsx } from "../utils";

  // props

  // state
  let { class: className } = $$props;
  let classes;

  // handler

  // reactive
  $: classes = clsx(className, "dbx-dialog");
</script>

<div {...$$restProps} class="{classes}">
  <slot />
</div>

<style src="./styles/dialog.scss" global>
</style>

