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
    <path d="M18 17h-7l5-5-5-5h7V4H6v2l6.5 6L6 18v2h12z" />
    {#if titleAccess}
      <title>{titleAccess}</title>
    {/if}
</svg>

