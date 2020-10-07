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
    <path d="M10 8.64v6.72L15.27 12z" opacity=".3" /><path d="M8 19l11-7L8 5v14zm2-10.36L15.27 12 10 15.36V8.64z" />
    {#if titleAccess}
      <title>{titleAccess}</title>
    {/if}
</svg>

