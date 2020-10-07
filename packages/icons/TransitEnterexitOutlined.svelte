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
    <path d="M16 18H6V8h3v4.77L15.98 6 18 8.03 11.15 15H16v3z" />
    {#if titleAccess}
      <title>{titleAccess}</title>
    {/if}
</svg>

