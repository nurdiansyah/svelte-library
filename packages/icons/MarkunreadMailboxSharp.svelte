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
    <path d="M22 6H10v6H8V4h6V0H6v6H2v16h20V6z" />
    {#if titleAccess}
      <title>{titleAccess}</title>
    {/if}
</svg>

