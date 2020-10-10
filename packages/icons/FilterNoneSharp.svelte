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
    <path d="M3 5H1v18h18v-2H3V5zm20-4H5v18h18V1zm-2 16H7V3h14v14z" />
    {#if titleAccess}
      <title>{titleAccess}</title>
    {/if}
</svg>

