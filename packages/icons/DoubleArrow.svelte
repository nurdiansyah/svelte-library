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
    <path d="M15.5 5H11l5 7-5 7h4.5l5-7z" /><path d="M8.5 5H4l5 7-5 7h4.5l5-7z" />
    {#if titleAccess}
      <title>{titleAccess}</title>
    {/if}
</svg>

