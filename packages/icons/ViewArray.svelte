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
    <path d="M4 18h3V5H4v13zM18 5v13h3V5h-3zM8 18h9V5H8v13z" />
    {#if titleAccess}
      <title>{titleAccess}</title>
    {/if}
</svg>

