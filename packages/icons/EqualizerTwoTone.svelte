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
    <path d="M16 9h4v11h-4zm-6-5h4v16h-4zm-6 8h4v8H4z" />
    {#if titleAccess}
      <title>{titleAccess}</title>
    {/if}
</svg>

