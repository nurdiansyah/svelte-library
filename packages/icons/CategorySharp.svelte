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
    <path d="M12 2l-5.5 9h11z" /><circle cx="17.5" cy="17.5" r="4.5" /><path d="M3 13.5h8v8H3z" />
    {#if titleAccess}
      <title>{titleAccess}</title>
    {/if}
</svg>

