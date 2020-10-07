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
    <path d="M2 14h8v2H2zm0-4h12v2H2zm0-4h12v2H2zm16 4h-2v4h-4v2h4v4h2v-4h4v-2h-4z" />
    {#if titleAccess}
      <title>{titleAccess}</title>
    {/if}
</svg>

