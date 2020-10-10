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
    <path d="M3 4c2.01 2.59 7 9 7 9v7h4v-7s4.98-6.41 7-9H3z" />
    {#if titleAccess}
      <title>{titleAccess}</title>
    {/if}
</svg>

