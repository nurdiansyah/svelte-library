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
    <path d="M4 18l8.5-6L4 6v12zm9-12v12l8.5-6L13 6z" />
    {#if titleAccess}
      <title>{titleAccess}</title>
    {/if}
</svg>

