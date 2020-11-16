<script lang="ts">
  import { clsx } from "../utils";
  import Paper from "./Paper.svelte";

  let { class: className } = $$props;
  let classes: string | undefined;
  export let raised: boolean = false;

  $: classes = clsx(className, "dbx-card");
</script>

<Paper {...$$restProps} class={classes} elevation={raised ? 8 : 1}>
  <slot />
</Paper>

<style src="./styles/card.scss" global>
</style>
