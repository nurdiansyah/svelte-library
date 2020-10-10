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
    <path d="M13 7h9v2h-9zM13 15h9v2h-9zM16 11h6v2h-6zM13 12L8 7v4H2v2h6v4z" />
    {#if titleAccess}
      <title>{titleAccess}</title>
    {/if}
</svg>

