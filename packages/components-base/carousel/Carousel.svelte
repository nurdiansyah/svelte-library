<script lang="ts">
  import { onDestroy, onMount } from "svelte";
  import clsx from "clsx";
  // import { getNewCarouselActiveIndex, browserEvent } from ".../utils";

  let className: string | null = null,
    classes: string;
  export { className as class };
  export let id: string | null = null;
  export let style: string | null = null;
  export let items: any[] = [];
  export let activeIndex: number = 0;
  export let ride: boolean = true;
  export let interval: number = 5000;
  export let pause: boolean = true;
  export let keyboard: boolean = true;
  let _rideTimeoutId = false;
  let _removeVisibilityChangeListener = false;

  $: classes = clsx(className, "carousel", "slide");

  onMount(() => {
    setRideTimeout();
  });

  _removeVisibilityChangeListener = browserEvent(document, "visibilitychange", () => {
    if (document.visibilityState === "hidden") {
      clearRideTimeout();
    } else {
      setRideTimeout();
    }
  });

  onDestroy(() => {
    if (_rideTimeoutId) {
      clearTimeout(_rideTimeoutId);
    }

    if (_removeVisibilityChangeListener) {
      _removeVisibilityChangeListener();
    }
  });

  function handleKeydown(event) {
    if (!keyboard) {
      return;
    }

    let direction = "";

    if (event.key === "ArrowLeft") {
      direction = "prev";
    } else if (event.key === "ArrowRight") {
      direction = "next";
    } else {
      return;
    }

    activeIndex = getNewCarouselActiveIndex(direction, items, activeIndex);
  }

  function setRideTimeout() {
    clearRideTimeout();

    if (ride) {
      _rideTimeoutId = setTimeout(autoNext, interval);
    }
  }

  function clearRideTimeout() {
    if (_rideTimeoutId) {
      clearTimeout(_rideTimeoutId);
    }
  }

  function autoNext() {
    activeIndex = getNewCarouselActiveIndex("next", items, activeIndex);
  }
</script>

<svelte:window on:keydown="{handleKeydown}" />

<div
  {...$$restProps}
  {id}
  class="{classes}"
  {style}
  on:mouseenter="{() => (pause ? clearRideTimeout() : undefined)}"
  on:mouseleave="{() => (pause ? setRideTimeout() : undefined)}">
  <slot />
</div>

<style lang="scss" global>
  @use "./carousel.scss";
</style>
