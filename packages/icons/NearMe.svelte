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
    <path d="M21 3L3 10.53v.98l6.84 2.65L12.48 21h.98L21 3z" />
    {#if titleAccess}
      <title>{titleAccess}</title>
    {/if}
</svg>

