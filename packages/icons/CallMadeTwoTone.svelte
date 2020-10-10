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
    <path d="M5.41 20L17 8.41V15h2V5H9v2h6.59L4 18.59z" />
    {#if titleAccess}
      <title>{titleAccess}</title>
    {/if}
</svg>

