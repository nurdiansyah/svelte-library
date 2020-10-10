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
    <path d="M23 20V4H1v16h22zM8.5 12.5l2.5 3.01L14.5 11l4.5 6H5l3.5-4.5z" />
    {#if titleAccess}
      <title>{titleAccess}</title>
    {/if}
</svg>

