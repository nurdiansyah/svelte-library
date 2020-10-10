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
    <path d="M21 5v14H3V5h18m0-2H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 5c3.25 0 6 1.83 6 4s-2.75 4-6 4-6-1.83-6-4 2.75-4 6-4m0-2c-4.42 0-8 2.69-8 6s3.58 6 8 6 8-2.69 8-6-3.58-6-8-6z" />
    {#if titleAccess}
      <title>{titleAccess}</title>
    {/if}
</svg>

