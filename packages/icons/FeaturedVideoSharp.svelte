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
    <path d="M23 3H1v18h22V3zm-11 9H3V5h9v7z" />
    {#if titleAccess}
      <title>{titleAccess}</title>
    {/if}
</svg>

