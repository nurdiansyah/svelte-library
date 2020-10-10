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
    <path d="M8 8h8v8H8z" opacity=".3" /><path d="M6 18h12V6H6v12zM8 8h8v8H8V8z" />
    {#if titleAccess}
      <title>{titleAccess}</title>
    {/if}
</svg>

