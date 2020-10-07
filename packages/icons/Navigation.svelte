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
    <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" />
    {#if titleAccess}
      <title>{titleAccess}</title>
    {/if}
</svg>

