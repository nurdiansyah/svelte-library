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
    <path d="M20 2h2v20h-2V2zM2 10h16V7H2v3zm6 7h10v-3H8v3z" />
    {#if titleAccess}
      <title>{titleAccess}</title>
    {/if}
</svg>

