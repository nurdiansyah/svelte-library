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
    <path d="M7 4h10v15H7zM3 6h2v11H3zM19 6h2v11h-2z" />
    {#if titleAccess}
      <title>{titleAccess}</title>
    {/if}
</svg>

