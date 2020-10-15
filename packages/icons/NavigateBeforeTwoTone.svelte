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
    <path d="M14.2 6l-6 6 6 6 1.41-1.41L11.03 12l4.58-4.59z" />
    {#if titleAccess}
      <title>{titleAccess}</title>
    {/if}
</svg>

