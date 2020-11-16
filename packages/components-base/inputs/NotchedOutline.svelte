<script lang="ts">
  import { clsx } from "../utils";

  export let label: string | undefined = undefined;
  export let notched: boolean = false;
  export let labelWidth: number = 0;
  export let align: "left" | "right" = "left";

  // state
  let { class: className } = $$props;
  let classes: string;
  let notchedWidth;

  $: classes = clsx(className, "notched-outline", label && "-labelled", notched && "-notched", `-align-${align}`);
  $: notchedWidth = notched && labelWidth > 0 ? labelWidth * 0.75 + 8 : 0.01;
</script>

<fieldset class={classes} aria-hidden="true" {...$$restProps}>
  <legend class="legend" style="width: {notchedWidth};"><span>{label || ' '}</span></legend>
</fieldset>

<style src="./styles/notched-outline.scss">
</style>
