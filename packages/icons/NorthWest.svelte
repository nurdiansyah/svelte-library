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
    <path d="M5 15h2V8.41L18.59 20 20 18.59 8.41 7H15V5H5v10z" />
    {#if titleAccess}
      <title>{titleAccess}</title>
    {/if}
</svg>

