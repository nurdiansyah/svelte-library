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
    <path d="M7 1.5L3.11 5.39l8.13 11.67-1.41 1.41 4.24 4.24 7.07-7.07L7 1.5zm5.66 16.97l4.24-4.24 1.41 1.41-4.24 4.24-1.41-1.41z" />
    {#if titleAccess}
      <title>{titleAccess}</title>
    {/if}
</svg>

