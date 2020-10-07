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
    <path d="M22 2H2v20l4-4h16V2zm-2 14H6l-2 2V4h16v12z" />
    {#if titleAccess}
      <title>{titleAccess}</title>
    {/if}
</svg>

