<script lang="ts">
  import clsx from "clsx";
  import BreadcrumbItem from "./BreadcrumbItem.svelte";

  let className: string | null = null,
    listClasses: string;
  export { className as class };
  export let ariaLabel: string = "breadcrumb";
  export let listClassName: string | null = null;
  export let itemClassName: string | null = null;
  export let dataList: any[];

  $: listClasses = clsx(listClassName, "nav-breadcrumb");
</script>

<nav {...$$restProps} aria-label="{ariaLabel}" class="{className}">
  <ol class="{listClasses}">
    <slot {dataList}>
      {#each dataList as value}
        <BreadcrumbItem class="{itemClassName}" active="{value.active}">{value.label}</BreadcrumbItem>
      {/each}
    </slot>
  </ol>
</nav>

<style lang="scss" global>
  @use "./breadcrumb.scss";
</style>
