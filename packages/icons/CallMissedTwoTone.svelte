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
    <path d="M5 10.41l7 7 9-9L19.59 7 12 14.59 6.41 9H11V7H3v8h2z" />
    {#if titleAccess}
      <title>{titleAccess}</title>
    {/if}
</svg>

