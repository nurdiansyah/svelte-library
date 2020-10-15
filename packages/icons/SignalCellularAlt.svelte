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
    <path d="M17 4h3v16h-3zM5 14h3v6H5zm6-5h3v11h-3z" />
    {#if titleAccess}
      <title>{titleAccess}</title>
    {/if}
</svg>

