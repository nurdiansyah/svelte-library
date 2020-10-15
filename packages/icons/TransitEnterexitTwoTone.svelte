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
    <path d="M15.98 6L9 12.77V8H6v10h10v-3h-4.85L18 8.03z" />
    {#if titleAccess}
      <title>{titleAccess}</title>
    {/if}
</svg>

