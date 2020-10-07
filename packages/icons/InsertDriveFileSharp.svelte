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
    <path d="M4.01 2L4 22h16V8l-6-6H4.01zM13 9V3.5L18.5 9H13z" />
    {#if titleAccess}
      <title>{titleAccess}</title>
    {/if}
</svg>

