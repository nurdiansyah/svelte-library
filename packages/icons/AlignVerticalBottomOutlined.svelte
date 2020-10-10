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
    <path d="M22 22H2v-2h20v2zM10 2H7v16h3V2zm7 6h-3v10h3V8z" />
    {#if titleAccess}
      <title>{titleAccess}</title>
    {/if}
</svg>

