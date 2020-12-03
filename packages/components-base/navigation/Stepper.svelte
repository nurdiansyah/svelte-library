

<script lang="ts">
  import { clsx } from "../utils";

  // props

  // state
  let { class: className } = $$props;
  let classes;

  // handler

  // reactive
  $: classes = clsx(className, "dbx-stepper");
</script>

<div {...$$restProps} class="{classes}">
  <slot />
</div>

<style src="./styles/stepper.scss" global>
</style>

