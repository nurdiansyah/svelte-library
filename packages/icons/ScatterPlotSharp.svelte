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
    <circle cx="7" cy="14" r="3" /><circle cx="11" cy="6" r="3" /><circle cx="16.6" cy="17.6" r="3" />
    {#if titleAccess}
      <title>{titleAccess}</title>
    {/if}
</svg>

