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
    <path d="M12 7.77L5.61 18h12.78z" opacity=".3" /><path d="M12 4L2 20h20L12 4zm0 3.77L18.39 18H5.61L12 7.77z" />
    {#if titleAccess}
      <title>{titleAccess}</title>
    {/if}
</svg>

