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
    <path d="M22 4H2v16h20V4zm-2 14H4v-6h16v6zm0-10H4V6h16v2z" />
    {#if titleAccess}
      <title>{titleAccess}</title>
    {/if}
</svg>

