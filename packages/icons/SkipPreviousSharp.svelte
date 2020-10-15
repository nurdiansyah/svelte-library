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
    <path d="M6 6h2v12H6V6zm3.5 6l8.5 6V6l-8.5 6z" />
    {#if titleAccess}
      <title>{titleAccess}</title>
    {/if}
</svg>

