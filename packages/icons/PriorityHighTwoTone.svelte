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
    <circle cx="12" cy="19" r="2" /><path d="M10 3h4v12h-4z" />
    {#if titleAccess}
      <title>{titleAccess}</title>
    {/if}
</svg>

