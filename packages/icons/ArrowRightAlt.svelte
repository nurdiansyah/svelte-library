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
    <path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4z" />
    {#if titleAccess}
      <title>{titleAccess}</title>
    {/if}
</svg>

