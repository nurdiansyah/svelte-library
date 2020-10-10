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
    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
    {#if titleAccess}
      <title>{titleAccess}</title>
    {/if}
</svg>

