<script lang="ts">
  import { clsx } from "../../utils";

  let { class: className } = $$props;
  let classes: string | undefined;

  $: classes = clsx(className, "card-action-area");
</script>

<div {...$$restProps} class={classes}>
  <slot />
</div>
