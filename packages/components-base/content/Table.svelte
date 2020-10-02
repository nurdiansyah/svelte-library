<script lang="ts">
  import clsx from "clsx";

  let className: string | null = null,
    classes: string;
  export { className as class };
  export let size: "sm" | "lg" | null = null;
  export let bordered: boolean = false;
  export let borderless: boolean = false;
  export let striped: boolean = false;
  export let dark: boolean = false;
  export let hover: boolean = false;
  export let responsive: boolean = true;

  $: classes = clsx(
    className,
    "c-table",
    size && `-${size}`,
    bordered && "-bordered",
    borderless && "-borderless",
    striped && "-striped",
    dark && "-dark",
    hover && "-hover"
  );
</script>

{#if responsive}
  <div class="{responsiveClassName}">
    <table {...$$restProps} class="{classes}">
      <slot />
    </table>
  </div>
{:else}
  <table {...$$restProps} class="{classes}">
    <slot />
  </table>
{/if}

<style lang="scss" global>
  @use "./table.scss";
</style>
