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
    <path d="M9.83 12H11v6h2v-6h1.17L12 9.83z" opacity=".3" /><path d="M5 4h14v2H5zm7 3l-7 7h4v6h6v-6h4l-7-7zm1 5v6h-2v-6H9.83L12 9.83 14.17 12H13z" />
    {#if titleAccess}
      <title>{titleAccess}</title>
    {/if}
</svg>

