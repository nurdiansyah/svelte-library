<script>
  export let viewBox = "0 0 24 24";

  /**
  *
  * @type {string} [htmlColor]
  */
  export let htmlColor = undefined;
</script>

<svg
  {...$$restProps}
  viewBox={viewBox}
  color={htmlColor}
  role="img"
>
  <path d="M10 8v8l5-4-5-4zm11-5H3v18h18V3zm-2 16H5V5h14v14z" />
  <title>SlideshowSharp</title>
</svg>

