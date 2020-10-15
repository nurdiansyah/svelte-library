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
    <path d="M15 17H8.41L20 5.41 18.59 4 7 15.59V9H5v10h10z" />
    {#if titleAccess}
      <title>{titleAccess}</title>
    {/if}
</svg>

