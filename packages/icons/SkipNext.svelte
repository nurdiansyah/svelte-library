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
    <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" />
    {#if titleAccess}
      <title>{titleAccess}</title>
    {/if}
</svg>

