<script>
  export let viewBox = "0 0 24 24";

  /**
  *
  * @type {string} [htmlColor]
  */
  export let htmlColor = undefined;
  export let ariaHidden = true;
  export let focusable = false;

</script>

<svg
  viewBox={viewBox}
  color={htmlColor}
  aria-hidden={ariaHidden}
  {focusable}
  {...$$restProps}
>
  {{{paths}}}
  <title>{{componentName}}</title>
</svg>

