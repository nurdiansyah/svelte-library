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
  <path d="M7 19h10V4H7v15zm-5-2h4V6H2v11zM18 6v11h4V6h-4z" />
  <title>ViewCarousel</title>
</svg>

