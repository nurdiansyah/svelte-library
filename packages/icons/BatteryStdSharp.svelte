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
    <path d="M17 4h-3V2h-4v2H7v18h10V4z" />
    {#if titleAccess}
      <title>{titleAccess}</title>
    {/if}
</svg>

