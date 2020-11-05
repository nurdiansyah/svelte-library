<script lang="ts">
  import { clsx } from "../utils";

  let { class: className } = $$props;
  let classes: string | undefined;
  export let id: string | undefined = undefined;

  $: classes = clsx(className, "card-body");
</script>

<div {...$$restProps} {id} class={classes}>
  <slot />
</div>
