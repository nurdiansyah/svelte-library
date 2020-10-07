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
    <path d="M7 3h2v2H7zm0 16h2v2H7zM3 3h2v2H3zm16 0h2v2h-2zm0 4h2v2h-2zm0 4h2v2h-2zM3 7h2v2H3zm0 12h2v2H3zm16 0h2v2h-2zm0-4h2v2h-2zM3 15h2v2H3zm0-4h2v2H3zm4 0h2v2H7zm8 0h2v2h-2zm-4 8h2v2h-2zm4 0h2v2h-2zm0-16h2v2h-2zm-4 0h2v2h-2zm0 4h2v2h-2zm0 8h2v2h-2zm0-4h2v2h-2z" />
    {#if titleAccess}
      <title>{titleAccess}</title>
    {/if}
</svg>

