<script lang="ts">
  import clsx from "clsx";
  let className: string | null = null,
    classes: string;
  export { className as class };
  $: classes = clsx(className, "navbar-text");
</script>

<span class="{classes}">
  <slot />
</span>

<style lang="scss" global>
  @use "../scss/variables-default" as var;
  .l-navbar .navbar-text {
    padding-top: var.$nav-link-padding-y;
    padding-bottom: var.$nav-link-padding-y;
  }
</style>
