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
    <path d="M21 3H3v18h18V3zm-2 16l-7-8v8H5l7-8V5h7v14z" />
    {#if titleAccess}
      <title>{titleAccess}</title>
    {/if}
</svg>

