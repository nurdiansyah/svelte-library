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
    <path d="M19 18l2 1V1H7v2h12v15zM17 5H3v18l7-3 7 3V5z" />
    {#if titleAccess}
      <title>{titleAccess}</title>
    {/if}
</svg>

