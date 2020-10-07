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
    <path d="M3 17h18v2H3zm0-7h18v5H3zm0-4h18v2H3z" />
    {#if titleAccess}
      <title>{titleAccess}</title>
    {/if}
</svg>

