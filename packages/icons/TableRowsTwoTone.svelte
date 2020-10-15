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
    <path d="M20 4v4H4V4h16zm0 6v4H4v-4h16zM4 20v-4h16v4H4z" opacity=".3" /><path d="M2 2v20h20V2H2zm18 2v4H4V4h16zm0 6v4H4v-4h16zM4 20v-4h16v4H4z" />
    {#if titleAccess}
      <title>{titleAccess}</title>
    {/if}
</svg>

