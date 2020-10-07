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
    <path d="M22 12l-4.97-7H8.66l10.7 10.73zM2 4l1 1v14h14l2 2 1.41-1.41L3.44 2.62z" />
    {#if titleAccess}
      <title>{titleAccess}</title>
    {/if}
</svg>

