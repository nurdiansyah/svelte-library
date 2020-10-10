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
    <path d="M6 15v3h8v-3h-2.21l3.42-8H18V4h-8v3h2.21l-3.42 8z" />
    {#if titleAccess}
      <title>{titleAccess}</title>
    {/if}
</svg>

