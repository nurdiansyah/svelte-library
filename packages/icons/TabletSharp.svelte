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
    <path d="M23 4H1v16h21.99L23 4zm-4 14H5V6h14v12z" />
    {#if titleAccess}
      <title>{titleAccess}</title>
    {/if}
</svg>

