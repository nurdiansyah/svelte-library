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
    <path d="M5 1v22h14V1H5zm12 18H7V5h10v14zm-1-6h-3V8h-2v5H8l4 4 4-4z" />
    {#if titleAccess}
      <title>{titleAccess}</title>
    {/if}
</svg>

