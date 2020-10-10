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
    <path d="M22 2v2H2V2h20zM7 22h3V6H7v16zm7-6h3V6h-3v10z" />
    {#if titleAccess}
      <title>{titleAccess}</title>
    {/if}
</svg>

