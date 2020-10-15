<script>
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
    <path d="M19 3H5v18l7-3 7 3V3zm-2 15l-5-2.18L7 18V5h10v13z" />
    {#if titleAccess}
      <title>{titleAccess}</title>
    {/if}
</svg>

