<script lang="ts">
  import { onMount } from "svelte";

  let portal: HTMLElement;
  export let container: HTMLElement | null = null;
  export let disable: boolean = false;

  onMount(() => {
    if (!disable) {
      if (!container) {
        container = document.body;
      }
      container.appendChild(portal);
    }
  });
</script>

{#if disable}
  <slot />
{:else}
  <div style="display: none">
    <div bind:this={portal} {...$$restProps}>
      <slot {container} />
    </div>
  </div>
{/if}
