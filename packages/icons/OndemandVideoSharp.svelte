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
    <path d="M23 3H1v16h7v2h8v-2h6.99L23 3zm-2 14H3V5h18v12zm-5-6l-7 4V7l7 4z" />
    {#if titleAccess}
      <title>{titleAccess}</title>
    {/if}
</svg>

