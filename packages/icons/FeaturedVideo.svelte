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
  <path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 9H3V5h9v7z" />
  <title>FeaturedVideo</title>
</svg>

