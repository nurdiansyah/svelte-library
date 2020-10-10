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
    <path d="M21 6H3v12h18V6zm-2 10H5V8h14v8z" />
    {#if titleAccess}
      <title>{titleAccess}</title>
    {/if}
</svg>

