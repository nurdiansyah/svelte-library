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
    <path d="M16 4H8c-.55 0-1 .45-1 1v13c0 .55.45 1 1 1h8c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zM4 6c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1s1-.45 1-1V7c0-.55-.45-1-1-1zM20 6c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1s1-.45 1-1V7c0-.55-.45-1-1-1z" />
    {#if titleAccess}
      <title>{titleAccess}</title>
    {/if}
</svg>

