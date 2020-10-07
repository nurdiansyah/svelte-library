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
    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
    {#if titleAccess}
      <title>{titleAccess}</title>
    {/if}
</svg>

