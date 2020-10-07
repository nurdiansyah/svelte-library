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
    <path d="M7 5H2v14h5V5zm14 0h-5v14h5V5zm-7 0H9v14h5V5z" />
    {#if titleAccess}
      <title>{titleAccess}</title>
    {/if}
</svg>

