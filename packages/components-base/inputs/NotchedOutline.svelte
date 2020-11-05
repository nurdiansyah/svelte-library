<script lang="ts">
  import { clsx } from "../utils";

  let { class: className } = $$props;
  let classes: string;
  let notchedWidth;

  export let label: string | undefined = undefined;
  export let notched: boolean = false;
  export let labelWidth: number = 0;
  export let align: "left" | "right" = "left";
  export { className as class };

  $: classes = clsx(className, "notched-outline", label && "-labelled", notched && "-notched", `-align-${align}`);
  $: notchedWidth = notched && labelWidth > 0 ? labelWidth * 0.75 * 8 : width;
</script>

<fieldset class={classes} aria-hidden="true" {...$$restProps}>
  <legend class="legend" style="width: {notchedWidth};"><span>{label || '&#8203;'}</span></legend>
</fieldset>

<style src="./notched-outline.scss">
</style>
