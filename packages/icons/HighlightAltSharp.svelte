<script>
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
    <path d="M17 5h-2V3h2v2zm2-2v2h2V3h-2zm0 6h2V7h-2v2zm0 4h2v-2h-2v2zm-8 8h2v-2h-2v2zM7 5h2V3H7v2zM3 5h2V3H3v2zm0 12h2v-2H3v2zm0 4h2v-2H3v2zm8-16h2V3h-2v2zM3 9h2V7H3v2zm4 12h2v-2H7v2zm-4-8h2v-2H3v2zm12 2v6l2.29-2.29 2.3 2.29L21 19.59l-2.29-2.29L21 15h-6z" />
    {#if titleAccess}
      <title>{titleAccess}</title>
    {/if}
</svg>

