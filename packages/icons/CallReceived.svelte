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
    <path d="M20 5.41L18.59 4 7 15.59V9H5v10h10v-2H8.41z" />
    {#if titleAccess}
      <title>{titleAccess}</title>
    {/if}
</svg>

