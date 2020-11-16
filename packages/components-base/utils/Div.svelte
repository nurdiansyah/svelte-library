<script>
  export let node = undefined;
</script>

<div {...$$props} bind:this={node}>
  <slot />
</div>
