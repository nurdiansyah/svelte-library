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
    <path d="M2 21h19v-3H2v3zM21 8H2v8h19V8zM2 3v3h19V3H2z" />
    {#if titleAccess}
      <title>{titleAccess}</title>
    {/if}
</svg>

