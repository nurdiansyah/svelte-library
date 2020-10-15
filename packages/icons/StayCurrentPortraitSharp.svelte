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
    <path d="M19 1.01L5.01 1v22H19V1.01zM17 19H7V5h10v14z" />
    {#if titleAccess}
      <title>{titleAccess}</title>
    {/if}
</svg>

