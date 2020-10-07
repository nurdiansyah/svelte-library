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
    <path d="M20 18l2-2V4H2v12l2 2H0v2h24v-2h-4zM4 6h16v10H4V6z" />
    {#if titleAccess}
      <title>{titleAccess}</title>
    {/if}
</svg>

