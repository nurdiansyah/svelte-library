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
    <path d="M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5z" />
    {#if titleAccess}
      <title>{titleAccess}</title>
    {/if}
</svg>

