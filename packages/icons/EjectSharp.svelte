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
    <path d="M5 17h14v2H5v-2zm7-12L5.33 15h13.34L12 5z" />
    {#if titleAccess}
      <title>{titleAccess}</title>
    {/if}
</svg>

