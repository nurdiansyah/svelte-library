<script lang="ts">
  import Portal from "../../Portal.svelte";
  let container;
</script>

<div>
  <div bind:this={container} data-testid="container" />

  {#if container}
    <Portal {container} {...$$props}>
      <div data-testid="child" />
    </Portal>
  {/if}
</div>
