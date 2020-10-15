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
    <path d="M3 12h3v7h3v-7h3V9H3zm6-5h5v12h3V7h5V4H9z" />
    {#if titleAccess}
      <title>{titleAccess}</title>
    {/if}
</svg>

