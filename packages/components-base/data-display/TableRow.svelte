<script lang="ts">
  import type { TableRowProps } from "./types";

  import { clsx } from "../utils";

  // props
  export let selected: TableRowProps["hover"] = false;
  export let hover: TableRowProps["hover"] = false;

  // state
  let { class: className } = $$props;
  let classes;

  // handler

  // reactive
  $: classes = clsx(className, "table-row", selected && "-selected", hover && "-hover");
</script>

<tr {...$$restProps} class={classes}>
  <slot />
</tr>
