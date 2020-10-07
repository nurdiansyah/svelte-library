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
    <path d="M22 2H2v20h20V2zM4 8V4h16v4H4zm0 6v-4h16v4H4zm0 6v-4h16v4H4z" />
    {#if titleAccess}
      <title>{titleAccess}</title>
    {/if}
</svg>

