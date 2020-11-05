<script lang="ts">
  import { clsx } from "../utils";

  let { class: className } = $$props;
  let classes: string | undefined;
  export let top: boolean = false;
  export let bottom: boolean = false;
  export let src: string | undefined = undefined;
  export let alt: string | undefined = undefined;

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

<img {...$$restProps} class={classes} {src} {alt} />
