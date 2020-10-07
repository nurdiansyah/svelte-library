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
    <path d="M4 6H2v16h16v-2H4V6zm18-4H6v16h16V2zm-3 9H9V9h10v2zm-4 4H9v-2h6v2zm4-8H9V5h10v2z" />
    {#if titleAccess}
      <title>{titleAccess}</title>
    {/if}
</svg>

