<script>
  export let disabled;
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
    <path d="M3 19h18v-6H3v6zm0-8h18V9H3v2zm0-6v2h18V5H3z" />
    {#if titleAccess}
      <title>{titleAccess}</title>
    {/if}
</svg>

