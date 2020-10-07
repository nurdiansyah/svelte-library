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
    <path d="M19 1H5v22h14V1zm-2 18H7V5h10v14z" /><path d="M8 6h8v2H8z" />
    {#if titleAccess}
      <title>{titleAccess}</title>
    {/if}
</svg>

