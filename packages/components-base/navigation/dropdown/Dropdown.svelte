<script lang="ts">
  import clsx from "clsx";
  import { dropdownStore } from "./store";

  type Alignment = "left" | "right";
  type Size = "sm" | "lg";
  let className: string | null = null,
    classes: string;
  export { className as class };
  export let direction: "up" | "left" | "right";
  export let alignment: Alignment;
  export let responsive: {
    sm?: Alignment;
    md?: Alignment;
    lg?: Alignment;
    xl?: Alignment;
    xxl?: Alignment;
  } = {};

  export let open: boolean = false;
  export let active: boolean = false;
  export let size: Size;
  export let toggle: Function;
  export let setActiveFromChild: boolean = false;

  let component;

  $: classes = clsx(
    className,
    direction && `-drop${direction}`,
    ($dropdownStore.active || (setActiveFromChild && $dropdownStore.subItemIsActive)) && "-active"
  );

  $: {
    if (typeof document !== "undefined") {
      if ($dropdownStore.active) {
        ["click", "touchstart", "keyup"].forEach((event) =>
          document.addEventListener(event, handleDocumentClick, true)
        );
      } else {
        ["click", "touchstart", "keyup"].forEach((event) =>
          document.removeEventListener(event, handleDocumentClick, true)
        );
      }
    }
  }

  $: {
    dropdownStore.update(() => {
      return {
        toggle,
        open,
        direction
      };
    });
  }

  function handleDocumentClick(e) {
    if (e && (e.which === 3 || (e.type === "keyup" && e.which !== 9))) return;

    if (component.contains(e.target) && component !== e.target && (e.type !== "keyup" || e.which === 9)) {
      return;
    }

    toggle(e);
  }
</script>

<div {...$$restProps} class="{classes}" bind:this="{component}">
  <slot />
</div>

<style lang="scss" global>
  @use "./dropdown";
</style>
