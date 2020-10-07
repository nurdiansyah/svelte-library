<script>
  export let disabled;
  export let label;
  export let titleAccess;
  export let viewBox = "0 0 24 24";
  export let htmlColor;

</script>

<svg
  {...$$restProps}
  viewBox="{viewBox}"
  aria-hidden="{titleAccess ? undefined : 'true'}"
  color="{htmlColor}"
  role="{titleAccess ? 'img' : undefined}"
>
    <path d="M5.59 19L7 20.41l6-6V8h3.5L12 3.5 7.5 8H11v5.59zm11.407 1.41l-3.408-3.407 1.4-1.407 3.41 3.408z" />
    {#if titleAccess}
      <title>{titleAccess}</title>
    {/if}
</svg>

