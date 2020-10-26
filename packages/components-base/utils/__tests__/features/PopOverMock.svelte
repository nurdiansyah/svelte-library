<script lang="ts">
  import PopOver from "../../PopOver.svelte";

  export let container: HTMLElement;
</script>

<div>
  <div bind:this={container} data-testid="container" />
  <PopOver {...$$props} {container}>
    <div>popover</div>
  </PopOver>
</div>
