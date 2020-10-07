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
    <path d="M11 3v10H8l4 4 4-4h-3V3zM4 19h16v2H4z" />
    {#if titleAccess}
      <title>{titleAccess}</title>
    {/if}
</svg>

