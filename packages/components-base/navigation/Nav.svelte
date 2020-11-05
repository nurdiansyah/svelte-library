<script lang="ts">
  import { clsx } from "../utils";

  let { class: className } = $$props;
  let classes: string | undefined;
  export let tabs: boolean = false;
  export let pills: boolean = false;
  export let vertical: boolean = false;
  export let horizontal: string | undefined = undefined;
  export let justified: boolean = false;
  export let fill: boolean = false;
  export let navbar: boolean = false;
  export let card: boolean = false;

  function getVerticalClass(vertical) {
    if (vertical === false) {
      return false;
    } else if (vertical === true || vertical === "xs") {
      return "flex-column";
    }
    return `flex-${vertical}-column`;
  }

  $: classes = clsx(
    className,
    navbar ? "navbar-nav" : "nav",
    horizontal ? `justify-content-${horizontal}` : false,
    getVerticalClass(vertical),
    {
      "nav-tabs": tabs,
      "card-header-tabs": card && tabs,
      "nav-pills": pills,
      "card-header-pills": card && pills,
      "nav-justified": justified,
      "nav-fill": fill
    }
  );
</script>

<ul {...$$restProps} class={classes}>
  <slot />
</ul>

<style lang="scss" src="./nav.scss" global>
</style>
