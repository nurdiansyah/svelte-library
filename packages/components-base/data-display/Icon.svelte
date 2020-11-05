<script lang="ts">
  import { clsx } from "../utils";
  import { cssVariable } from "../actions";
  import type { SvelteComponent } from "svelte/internal";

  let { class: className } = $$props;
  let classes: string | undefined;
  export let rotate: number = 0;
  export let color: "inherit" | "primary" | "secondary" | "disabled" | "active" | "error" = "inherit";
  export let size: "inherit" | "small" | "large" | "default" = "default";
  export let label: string | undefined = undefined;
  export let path: string | undefined = undefined;
  export let component: typeof SvelteComponent | undefined = undefined;
  export let type: "svg" | "font" = "svg";

  $: classes = clsx(
    className,
    "dbx-icon",
    `-type-${type}`,
    size !== "default" && `-${size}`,
    color !== "inherit" && `-${color}`
  );
</script>

<svelte:component this={component} {...$$restProps} class={classes} />
{#if !component}
  <i use:cssVariable={{ 'icon-rotate': `${rotate}deg` }} aria-hidden="true" {...$$restProps}>
    {#if type === 'svg' && path}
      <svg xmlns="http://www.w3.org/2000/svg" class={classes} viewBox="0 0 24 24">
        <path d={path}>
          {#if label}
            <title>{label}</title>
          {/if}
        </path>
      </svg>
    {/if}
  </i>
{/if}

<style src="./styles/icon.scss" global>
</style>
