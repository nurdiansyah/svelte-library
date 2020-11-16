<script lang="ts">
  import { clsx } from "../utils";
  import { setContext } from "./form/form-context";

  // props

  // context
  setContext();
  // state
  let { class: className } = $$props;
  let classes;

  // handler

  // reactive
  $: classes = clsx(className, "dbx-form");
</script>

<form {...$$restProps} class={classes}>
  <slot />
</form>

<style src="./styles/form.scss" global>
</style>
