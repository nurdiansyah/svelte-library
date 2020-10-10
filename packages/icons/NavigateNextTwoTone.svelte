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
    <path d="M10.02 18l6-6-6-6-1.41 1.41L13.19 12l-4.58 4.59z" />
    {#if titleAccess}
      <title>{titleAccess}</title>
    {/if}
</svg>

