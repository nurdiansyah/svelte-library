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
  <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
  <title>Add</title>
</svg>

