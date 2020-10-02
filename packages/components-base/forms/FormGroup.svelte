<script lang="ts">
  import clsx from "clsx";
  import {} from "../utils"
  import Col from "../grid/Col.svelte";

  let className: string | null = null, classes: string;
  let inline: boolean = false;
  let labelResponsive;


  export { className as class };
  export let label: string | null = null;

  $: classes = clsx(className, "form-group");
</script>

<style lang="scss">

</style>

<div class="{classes}" {...$$restProps}>
  {#if $$slots.label || label}
    {#if inline}
      <Col responsive="{labelResponsive}">
    {/if}
    <slot name="label">

    </slot>
    </Col>
  {/if}
</div>
