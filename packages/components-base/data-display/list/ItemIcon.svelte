<script lang="ts">
  import { clsx } from "../utils";

  let { class: className } = $$props;
  let classes: string | undefined;
  export let alignItemsFlexStart: boolean = false;

  $: classes = clsx(className, "list-item-icon", listItemsFlexStart && "-align-items-flex-start");
</script>

<div {...$$restProps} class={classes}>
  <slot />
</div>
