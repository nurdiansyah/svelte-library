<script lang="ts">
  import type { TableHeaderProps, TableHeadCell } from "./types";

  import { createEventDispatcher } from "svelte";
  import { clsx } from "../utils";
  import TableCell from "./TableCell.svelte";

  // props
  export let onSelectAll: TableHeaderProps["onSelectAll"] = undefined;
  export let sortDirection: TableHeaderProps["sortDirection"] = undefined;
  export let keySortSelect: TableHeaderProps["keySortSelect"] = undefined;
  export let numSelected: TableHeaderProps["numSelected"] = 0;
  export let rowCount: TableHeaderProps["rowCount"] = 0;
  export let onRequestSort: TableHeaderProps["onRequestSort"] = undefined;
  export let headCells: TableHeaderProps["headCells"] = [];

  // state
  let { class: className } = $$props;
  let classes;

  // handler
  function handleRequestSort(e: MouseEvent, headCell: TableHeadCell) {}

  function getSortingDirection(headCell: TableHeadCell) {
    if (!headCell.sortDisable && headCell.key) {
    }
  }

  // reactive
  $: classes = clsx(className, "table-header");
</script>

{#each headCells as headCell}
  <TableCell {...$$restProps} {...headCell.cellProps || {}} sortDirection={headCell.sortable && headCell}>
    {headCell.label}
  </TableCell>
{/each}

<style src="./styles/table-header.scss" global>
</style>
