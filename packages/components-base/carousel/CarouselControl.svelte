<script lang="ts">
  import clsx from "clsx";
  import { getNewCarouselActiveIndex } from "./utils";

  let className: string | null = null,
    classes: string;
  let srText = "";
  export { className as class };
  export let id: string | null = null;
  export let direction: string | null = null;
  export let directionText: string | null = null;
  export let activeIndex: number = 0;
  export let items: any[] = [];
  export let wrap: boolean = true;

  $: classes = clsx(`carousel-control-${direction}`, className);

  const getSrText = (direction) => {
    if (direction === "next") {
      return "Next";
    } else if (direction === "prev") {
      return "Previous";
    }
  };

  $: srText = directionText ? directionText : getSrText(direction);

  function clickHandler() {
    const endOrBeginning =
      (direction === "next" && activeIndex + 1 > items.length - 1) || (direction === "previous" && activeIndex - 1 < 0);

    if (!wrap && endOrBeginning) {
      return;
    }

    activeIndex = getNewCarouselActiveIndex(direction, items, activeIndex);
  }
</script>

<a {...$$restProps} {id} class="{classes}" role="button" href="#{direction}" on:click|preventDefault="{clickHandler}">
  <span class="carousel-control-{direction}-icon" aria-hidden="true"></span>
  <span class="sr-only">{srText}</span>
</a>
