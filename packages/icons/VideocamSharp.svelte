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
    <path d="M17 10.5V6H3v12h14v-4.5l4 4v-11l-4 4z" />
    {#if titleAccess}
      <title>{titleAccess}</title>
    {/if}
</svg>

