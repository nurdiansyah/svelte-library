<script lang="ts">
  import clsx from "clsx";
  import Container from "../grid/Container.svelte";

  let className: string | null = null,
    classes: string;
  export { className as class };
  export let href = "/";

  $: classes = clsx(className, "navbar-brand");
</script>

<a {...$$restProps} class="{classes}" {href}>
  <slot />
</a>

<style lang="scss">
  @use "../scss/variables-default" as var;
  @use "../scss/mixins/index" as mix;
  // Navbar brand
  //
  // Used for brand, project, or site names.
  .l-navbar .navbar-brand {
    padding-top: var.$navbar-brand-padding-y;
    padding-bottom: var.$navbar-brand-padding-y;
    margin-right: var.$navbar-brand-margin-right;
    @include mix.font-size(var.$navbar-brand-font-size);
    text-decoration: if(var.$link-decoration == none, null, none);
    white-space: nowrap;

    &:hover,
    &:focus {
      text-decoration: if(var.$link-hover-decoration == underline, none, null);
    }
  }
</style>
