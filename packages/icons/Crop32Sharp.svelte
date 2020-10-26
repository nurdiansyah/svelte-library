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
  <path d="M21 4H3v16h18V4zm-2 14H5V6h14v12z" />
  <title>Crop32Sharp</title>
</svg>

