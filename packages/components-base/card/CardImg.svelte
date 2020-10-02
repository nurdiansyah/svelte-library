<script lang="ts">
  import clsx from "clsx";

  let className: string | null = null,
    classes: string;
  export { className as class };
  export let top: boolean = false;
  export let bottom: boolean = false;
  export let src: string | null = null;
  export let alt: string | null = null;

  $: {
    let cardImgClassName = "card-img";
    if (top) {
      cardImgClassName = "card-img-top";
    }
    if (bottom) {
      cardImgClassName = "card-img-bottom";
    }
    classes = clsx(className, cardImgClassName);
  }
</script>

<img {...$$restProps} class="{classes}" {src} {alt} />
