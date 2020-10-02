<script lang="ts">
  import clsx from "clsx";
  import Container from "@deboxsoft/svelte-components-base/grid/Container.svelte";
  import NavbarBrand from "./Brand.svelte";
  import Toggler from "./Toggler.svelte";
  import Collapse from "../transition/Collapse.svelte";
  import Nav from "../navigation/Nav.svelte";

  let className: string | null = null,
    classes: string;
  export { className as class };
  export let light: boolean = false;
  export let dark: boolean = false;
  export let fixed: string | null = null;
  export let sticky: string | null = null;
  export let color: string | null = null;
  export let collapseEnable: boolean = true;
  export let expand: "xs" | "sm" | "md" | "lg" | "xl" | boolean = false;
  export let openCollapse: boolean = false;

  function getExpandClass(expand) {
    if (expand === false) {
      return false;
    } else if (expand === true || expand === "xs") {
      return "navbar-expand";
    }

    return `navbar-expand-${expand}`;
  }

  $: classes = clsx(
    className,
    "navbar",
    expand && `-expand${typeof expand === "string" && `-${expand}`}`,
    "-light" && light,
    dark && "-dark",
    fixed && "-fixed",
    sticky && "-sticky"
  );
</script>

<div {...$$restProps} class="{classes}" style="--navbar-background-color: {color};">
  <Container class="container" fluid>
    <slot name="brand">
      <NavbarBrand />
    </slot>
    <Toggler on:click="{() => (openCollapse = !openCollapse)}" />
    <slot />
    {#if collapseEnable}
      <Collapse show="{openCollapse}">
        <slot name="item-left">
          <div></div>
        </slot>
        <slot name="item-right" />
      </Collapse>
    {/if}
  </Container>
</div>

<style lang="scss" global>
  @use "./navbar.scss";
</style>
