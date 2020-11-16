<script lang="ts">
  import { clsx } from "../utils";

  let { class: className } = $$props;
  let classes: string | undefined;
  export let id: string | undefined = undefined;
  export let tag = "div";

  $: classes = clsx(className, "card-header");
</script>

{#if tag === 'h3'}
  <h3 {...$$restProps} {id} class={classes} on:click>
    <slot />
  </h3>
{:else}
  <div {...$$restProps} {id} class={classes} on:click>
    <slot />
  </div>
{/if}
