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
    <path d="M4 18.99h12.04L21 12l-4.97-7H4l5 7-5 6.99z" />
    {#if titleAccess}
      <title>{titleAccess}</title>
    {/if}
</svg>

