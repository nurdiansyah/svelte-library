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
    <path d="M16 14.14V9.86L12.97 12z" opacity=".3" /><path d="M6 6h2v12H6zm12 12V6l-8.5 6 8.5 6zm-2-3.86L12.97 12 16 9.86v4.28z" />
    {#if titleAccess}
      <title>{titleAccess}</title>
    {/if}
</svg>

