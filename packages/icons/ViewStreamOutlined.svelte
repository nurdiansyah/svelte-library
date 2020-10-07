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
    <path d="M4 6v12h17V6H4zm15 10H6v-3h13v3zM6 11V8h13v3H6z" />
    {#if titleAccess}
      <title>{titleAccess}</title>
    {/if}
</svg>

