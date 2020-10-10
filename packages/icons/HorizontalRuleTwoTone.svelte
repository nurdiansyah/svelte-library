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
    <path fillRule="evenodd" d="M4 11h16v2H4z" />
    {#if titleAccess}
      <title>{titleAccess}</title>
    {/if}
</svg>

