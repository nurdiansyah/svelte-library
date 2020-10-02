<script lang="ts">
  import clsx from "clsx";
  import PopperJS from "popper.js";
  import { onDestroy, tick } from "svelte";

  export let placement: string = "bottom";
  export let eventsEnabled: boolean = true;
  export let positionFixed: boolean = false;
  export let modifiers = {};
  export let targetRef: any;
  export let arrowRef: any;
  export let outOfBoundaries: any;
  export { className as class };

  let className: string | null = null,
    classes: string;
  let contentRef;
  let popper;
  let props;
  let statePlacement = placement;
  const updateStateModifier = {
    enabled: true,
    order: 900,
    fn: (data) => {
      statePlacement = data.placement;
      outOfBoundaries = data.hide;
      return data;
    }
  };
  const getOptions = () => ({
    placement,
    eventsEnabled,
    positionFixed,
    modifiers: {
      ...modifiers,
      arrow: {
        ...(modifiers && modifiers.arrow),
        enabled: !!arrowRef,
        element: arrowRef
      },
      updateStateModifier
    }
  });
  const destroyPopperInstance = () => {
    if (!popper) return;
    popper.destroy();
    popper = undefined;
  };
  const updatePopperInstance = async () => {
    await tick();
    destroyPopperInstance();
    popper = new PopperJS(targetRef, contentRef, getOptions());
  };
  export const scheduleUpdate = () => popper && popper.scheduleUpdate();
  onDestroy(() => destroyPopperInstance());
  $: if (!targetRef) {
    throw new Error("A valid target reference must be passed to Popper component.");
  }
  $: if (PopperJS.placements.indexOf(placement) === -1) {
    throw new Error(`Invalid placement sent: '${placement}' is not one of ${PopperJS.placements.join(", ")}.`);
  }
  $: classes = clsx(className, "svlt-popper");
  $: arrowRef, targetRef, placement, positionFixed, modifiers, updatePopperInstance();
  $: if (popper) {
    if (eventsEnabled) {
      popper.enableEventListeners();
    } else {
      popper.disableEventListeners();
    }
    if (statePlacement) {
      scheduleUpdate();
    }
  }
</script>

<div {...$$restProps} bind:this="{contentRef}" class="{classes}" x-placement="{placement}">
  <slot />
</div>
