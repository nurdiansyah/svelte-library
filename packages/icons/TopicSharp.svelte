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
    <path d="M12 6l-2-2H2v16h20V6H12zm2 10H6v-2h8v2zm4-4H6v-2h12v2z" />
    {#if titleAccess}
      <title>{titleAccess}</title>
    {/if}
</svg>

