<script lang="ts">
  import clsx from "clsx";

  let className: string | null = null,
    classes: string;
  export { className as class };
  export let active: boolean = false;
  export let addonType: boolean = false;
  export let direction: "down" | "up" = "down";
  export let disabled: boolean = false;
  export let dropup: boolean = false;
  export let group: boolean = false;
  export let inNavbar: boolean = false;
  export let isOpen: boolean = false;
  export let nav: boolean = false;
  export let setActiveFromChild: boolean = false;
  export let size: "sm" | "lg" = null;
  export let toggle: ((e?: Event) => void) | null = null;

  toggle();

  $: classes = clsx(className, "button-dropdown");
</script>

<div {...$$restProps} class="{className}" {disabled} on:click>
  <slot />
</div>

<style lang="scss" global>
  @use "./dropdown";
</style>
