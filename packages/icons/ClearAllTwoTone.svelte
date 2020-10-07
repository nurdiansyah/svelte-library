<script>
  export let disabled;
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
    <path d="M5 11h14v2H5zm-2 4h14v2H3zm4-8h14v2H7z" />
    {#if titleAccess}
      <title>{titleAccess}</title>
    {/if}
</svg>

