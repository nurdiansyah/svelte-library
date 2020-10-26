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
  <path d="M20 9H4v2h16V9zM4 15h16v-2H4v2z" />
  <title>DragHandleSharp</title>
</svg>

