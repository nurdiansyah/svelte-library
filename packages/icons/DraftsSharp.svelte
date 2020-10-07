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
    <path d="M21.99 6.86L12 1 2 6.86V20h20l-.01-13.14zM12 13L3.74 7.84 12 3l8.26 4.84L12 13z" />
    {#if titleAccess}
      <title>{titleAccess}</title>
    {/if}
</svg>

