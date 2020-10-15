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
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8h5z" />
    {#if titleAccess}
      <title>{titleAccess}</title>
    {/if}
</svg>

