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
    <path d="M6 21h12V7H6v14zm6-11l4 4h-2v4h-4v-4H8l4-4zm3.5-6l-1-1h-5l-1 1H5v2h14V4z" />
    {#if titleAccess}
      <title>{titleAccess}</title>
    {/if}
</svg>

