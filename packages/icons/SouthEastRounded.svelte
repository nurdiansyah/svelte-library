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
    <path d="M18 9c-.56 0-1 .45-1 1v5.59L6.12 4.7a.9959.9959 0 00-1.41 0c-.39.39-.39 1.02 0 1.41L15.59 17H10c-.55 0-1 .45-1 1s.45 1 1 1h8c.55 0 1-.45 1-1v-8c0-.55-.45-1-1-1z" />
    {#if titleAccess}
      <title>{titleAccess}</title>
    {/if}
</svg>

