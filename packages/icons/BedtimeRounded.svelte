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
    <path d="M11.97 2.73c.16-.34-.12-.72-.5-.7-6 .3-10.47 5.83-9.28 11.96.78 4.03 4.09 7.22 8.14 7.87 4.07.66 7.77-1.14 9.87-4.15.21-.31.04-.75-.33-.79-6.74-.76-10.87-7.96-7.9-14.19z" />
    {#if titleAccess}
      <title>{titleAccess}</title>
    {/if}
</svg>

