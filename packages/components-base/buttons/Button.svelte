<script lang="ts">
  import clsx from "clsx";
  import { getId } from "../utils";
  import { SvelteComponent } from "svelte/internal";

  let className: string | null = null,
    classes: string,
    startIconClasses: string,
    endIconClasses: string;
  export { className as class };
  export let color: "default" | "inherit" | "primary" | "secondary" = "default";
  export let disabled: boolean = false;
  export let href: string | null = null;
  export let size: "small" | "large" | null = null;
  export let style: string | null = null;
  export let close: boolean = false;
  export let variant: "text" | "outlined" | "contained" = "text";
  export let link: boolean = false;
  export let fullWidth: boolean = false;
  export let startIcon: any = null;
  export let endIcon: any = null;

  $: {
    startIconClasses = clsx("start-icon", size === "small" && "-small");
    endIconClasses = clsx("end-icon", size === "small" && "-small");
    classes = clsx(className, "dbx-button", disabled && "-disabled", size && `-${size}`, `-${variant}`, `-${color}`);
  }
</script>

{#if href || link}
  <a {...$$restProps} class="{classes}" on:click href="{href || '#'}">
    <span class="label">
      <svelte:component this="{startIcon}" class="{startIconClass}" />
      <slot />
      <svelte:component this="{endIcon}" class="{endIconClasses}" />
    </span>
  </a>
{:else}
  <button {...$$restProps} class="{classes}" on:click>
    <span class="label">
      <svelte:component this="{startIcon}" class="{startIconClasses}" />
      <slot />
      <svelte:component this="{endIcon}" class="{endIconClasses}" />
    </span>
  </button>
{/if}

<style src="./button.scss" global>
</style>
