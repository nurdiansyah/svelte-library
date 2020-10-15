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
    <path d="M15 18c0-.56-.45-1-1-1H8.41L19.3 6.11c.39-.39.39-1.02 0-1.41a.9959.9959 0 00-1.41 0L7 15.59V10c0-.55-.45-1-1-1s-1 .45-1 1v8c0 .55.45 1 1 1h8c.55 0 1-.45 1-1z" />
    {#if titleAccess}
      <title>{titleAccess}</title>
    {/if}
</svg>

