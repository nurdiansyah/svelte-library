<script lang="ts">
  import type { TableProps, TableCellProps } from "./types";

  import { clsx } from "../utils";

  let { class: className } = $$props;
  let classes: string | undefined;
  export let size: TableProps["size"] = "medium";
  export let containerDisabled: TableProps["containerDisabled"] = false;
  export let headerSticky: TableProps["headerSticky"] = false;

  $: {
    classes = clsx(className, "dbx-table", size !== "medium" && `-size-${size}`, headerSticky && "-header-sticky");
  }
</script>

{#if !containerDisabled}
  <div class="table-container">
    <table {...$$restProps} class={classes}>
      <slot name="caption" />
      {#if $$slots['header']}
        <thead class="table-header">
          <slot name="header" />
        </thead>
      {/if}
      <tbody class="table-body">
        <slot />
      </tbody>
      {#if $$slots['footer']}
        <tfoot class="table-footer">
          <slot name="footer" />
        </tfoot>
      {/if}
    </table>
  </div>
{:else}
  <table {...$$restProps} class={classes}>
    <slot name="caption" />
    {#if $$slots['header']}
      <thead class="table-header">
        <slot name="header" />
      </thead>
    {/if}
    <tbody class="table-body">
      <slot />
    </tbody>
    {#if $$slots['footer']}
      <tfoot class="table-footer">
        <slot name="footer" />
      </tfoot>
    {/if}
  </table>
{/if}

<style src="./styles/table.scss" global>
</style>
