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
    <path d="M20 2H4v20h16V2zM6 4h5v8l-2.5-1.5L6 12V4z" />
    {#if titleAccess}
      <title>{titleAccess}</title>
    {/if}
</svg>

