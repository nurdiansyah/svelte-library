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
    <path d="M19 18V5h-.3L14 6.7v1.7l3-1.02V18zM4 11h8v2H4z" />
    {#if titleAccess}
      <title>{titleAccess}</title>
    {/if}
</svg>

