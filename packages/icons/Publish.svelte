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
  <path d="M5 4v2h14V4H5zm0 10h4v6h6v-6h4l-7-7-7 7z" />
  <title>Publish</title>
</svg>

