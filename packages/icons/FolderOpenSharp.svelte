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
    <path d="M22 6H12l-2-2H2v16h20V6zm-2 12H4V8h16v10z" />
    {#if titleAccess}
      <title>{titleAccess}</title>
    {/if}
</svg>

