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
    <path d="M21 7H3v10h18V7zm-2 8H5V9h14v6z" />
    {#if titleAccess}
      <title>{titleAccess}</title>
    {/if}
</svg>

