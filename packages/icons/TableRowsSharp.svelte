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
    <path d="M22 7H2V2h20v5zm0 2.5H2v5h20v-5zm0 7.5H2v5h20v-5z" />
    {#if titleAccess}
      <title>{titleAccess}</title>
    {/if}
</svg>

