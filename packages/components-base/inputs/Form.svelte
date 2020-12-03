<script lang="ts">
  import { clsx } from "../utils";
  import { setContext } from "./form/form-context";

  // props

  // context
  const context = setContext();

  // state
  let { class: className } = $$props;
  let classes;

  // handler

  // reactive
  $: classes = clsx(className, "dbx-form");
</script>

<style src="./styles/form.scss" global>
</style>

<div class={classes}>
  <form {...$$restProps} class={classes}>
    <slot />
  </form>
</div>
