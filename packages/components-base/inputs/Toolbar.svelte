<script lang="ts">
  import { clsx } from "../utils";

  let { class: className } = $$props;
  let classes: string | undefined;

  export let disableGutter: boolean = false;
  export let variant: "regular" | "dense" = "regular";

  $: classes = clsx(className, "dbx-toolbar", !disableGutter && "-gutter", variant !== "regular" && `-${variant}`);
</script>

<div class="dbx-toolbar" role="toolbar" {...$$restProps}>
  <slot />
</div>

<style src="./styles/toolbar.scss" global>
</style>
