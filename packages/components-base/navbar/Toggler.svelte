<script lang="ts">
  import clsx from "clsx";
  import Button from "../buttons/Button.svelte";

  let className: string | null = null,
    classes: string;
  export { className as class };

  $: classes = clsx(className, "navbar-toggler");
</script>

<button type="button" {...$$restProps} on:click class="{classes}">
  <slot>
    <span class="icon"></span>
  </slot>
</button>

<style lang="scss" global>
  @use "../scss/variables-default" as var;
  @use "../scss/mixins/index" as mix;

  // Button for toggling the navbar when in its collapsed state
  .navbar-toggler {
    padding: var.$navbar-toggler-padding-y var.$navbar-toggler-padding-x;
    @include mix.font-size(var.$navbar-toggler-font-size);
    line-height: 1;
    background-color: transparent; // remove default button style
    border: var.$border-width solid transparent; // remove default button style
    @include mix.border-radius(var.$navbar-toggler-border-radius);
    @include mix.transition(var.$navbar-toggler-transition);

    &:hover {
      text-decoration: none;
    }

    &:focus {
      text-decoration: none;
      outline: 0;
      box-shadow: 0 0 0 var.$navbar-toggler-focus-width;
    }

    // Keep as a separate element so folks can easily override it with another icon
    // or image file as needed.
    > .icon {
      display: inline-block;
      width: 1.5em;
      height: 1.5em;
      vertical-align: middle;
      background-repeat: no-repeat;
      background-position: center;
      background-size: 100%;
    }
  }
</style>
