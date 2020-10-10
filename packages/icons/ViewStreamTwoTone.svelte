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
    <path d="M6 13h13v3H6zm0-5h13v3H6z" opacity=".3" /><path d="M4 6v12h17V6H4zm15 10H6v-3h13v3zm0-5H6V8h13v3z" />
    {#if titleAccess}
      <title>{titleAccess}</title>
    {/if}
</svg>

