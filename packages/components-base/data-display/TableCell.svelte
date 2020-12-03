<script lang="ts">
  import type { TdProps } from "./types";

  import { clsx } from "../utils";

  // props
  export let sortDirection: TdProps["sortDirection"] = undefined;
  export let align: TdProps["align"] = "inherit";
  export let padding: TdProps["padding"] = "default";

  // state
  let { class: className } = $$props;
  let classes: string, ariaSort: string;

  // handler

  // reactive
  $: classes = clsx(
    className,
    "table-cell",
    sortDirection && `-${sortDirection}`,
    padding !== "default" && `-padding-${padding}`,
    align !== "inherit" && `-align-${align}`
  );
</script>

<td {...$$restProps} class={classes} role="cell">
  <slot />
</td>
