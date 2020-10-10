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
    <path d="M20 9H4v2h16V9zM4 15h16v-2H4v2z" />
    {#if titleAccess}
      <title>{titleAccess}</title>
    {/if}
</svg>

