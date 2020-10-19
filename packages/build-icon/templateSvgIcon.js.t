<script>
  export let viewBox = "0 0 24 24";
  export let htmlColor;
</script>

<svg
  {...$$restProps}
  viewBox="{viewBox}"
  color="{htmlColor}"
  role="img"
>
  {{{paths}}}
  <title>{{componentName}}</title>
</svg>

