<script lang="ts">
  import type { ThProps } from "./types";

  import IconArrowDownward from "@deboxsoft/svelte-icons/ArrowDownward.svelte";
  import { clsx } from "../utils";
  import ButtonBase from "../inputs/ButtonBase.svelte";
  import Icon from "./Icon.svelte";

  // props
  export let active: ThProps["active"] = false;
  export let hideSortIcon: ThProps["hideSortIcon"] = false;
  export let sortDirection: ThProps["sortDirection"] = undefined;
  export let align: ThProps["align"] = "inherit";
  export let scope: ThProps["scope"] = "col";
  export let sortable: ThProps["sortable"] = false;
  export let padding: ThProps["padding"] = "default";

  // state
  let { class: className } = $$props;
  let classes: string, ariaSort: string;

  // handler

  // reactive
  $: classes = clsx(
    className,
    "table-cell -head",
    sortable && sortDirection && `-${sortDirection}`,
    align !== "inherit" && `-align-${align}`,
    padding !== "default" && `-padding-${padding}`
  );
</script>

<th
  {scope}
  {...$$restProps}
  class={classes}
  role="columnheader"
  {...{ ['aria-sort']: (sortable && sortDirection) || undefined }}>
  {#if sortable}
    <ButtonBase rippleDisable class={sortable && '-label-sort'}>
      <slot />
      {#if !hideSortIcon || active}
        <Icon component={IconArrowDownward} />
      {/if}
    </ButtonBase>
  {:else}
    <slot />
  {/if}
</th>
