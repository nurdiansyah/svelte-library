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
    <path d="M2 2v20l4-4h16V2H2zm17 11l-2.5-1.5L14 13V5h5v8z" />
    {#if titleAccess}
      <title>{titleAccess}</title>
    {/if}
</svg>

