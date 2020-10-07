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
    <path d="M17.03 5L3 5.01v13.98l14.03.01L22 12l-4.97-7z" />
    {#if titleAccess}
      <title>{titleAccess}</title>
    {/if}
</svg>

