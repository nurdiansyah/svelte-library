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
    <path d="M19 9h-2v6.59L5.41 4 4 5.41 15.59 17H9v2h10V9z" />
    {#if titleAccess}
      <title>{titleAccess}</title>
    {/if}
</svg>

