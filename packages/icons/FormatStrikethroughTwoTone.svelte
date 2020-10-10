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
    <path d="M3 12h18v2H3zm11-2V7h5V4H5v3h5v3zm-4 6h4v3h-4z" />
    {#if titleAccess}
      <title>{titleAccess}</title>
    {/if}
</svg>

