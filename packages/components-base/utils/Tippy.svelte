<script lang="ts">
  import type { Instance as TippyInstance } from "tippy.js";

  import { onMount } from "svelte";
  import { clsx } from "./clsx";
  import Tippyjs from "tippy.js/headless";
  import Paper from "../surfaces/Paper.svelte";
  import Portal from "./Portal.svelte";

  // state
  let className: string | undefined = undefined,
    tippyjs: TippyInstance | undefined = undefined,
    node,
    classes: string | undefined;

  // props
  export { className as class };
  export let disablePortal: boolean = false;
  export let tippyjsProps: Object = {};
  export let target: HTMLElement;
  export let elevation: number = 8;

  const createTippyjs = (node: HTMLElement, props) => {
    Tippyjs.setDefaultProps({ animation: false });
    let tippyjs = Tippyjs(
      target,
      Object.assign(
        {
          onShow(e) {
            console.log("show");
          },
          content: node,
          render: (instance) => {
            // The recommended structure is to use the popper as an outer wrapper
            // element, with an inner `box` element
            const popper = document.createElement("div");
            const box = document.createElement("div");

            popper.appendChild(box);

            box.className = "dbx-popover";
            box.appendChild(instance.props.content);
            console.log(node.outerHTML);

            function onUpdate(prevProps, nextProps) {
              console.log("update");
              console.log(nextProps);
              // DOM diffing
              if (prevProps.content !== nextProps.content) {
                box.appendChild(nextProps.content);
              }
            }

            // Return an object with two properties:
            // - `popper` (the root popper element)
            // - `onUpdate` callback whenever .setProps() or .setContent() is called
            return {
              popper,
              onUpdate // optional
            };
          }
        },
        props
      )
    );
    return {
      update(props) {
        tippyjs.setProps(props);
      }
    };
  };

  onMount(() => {
    console.log("mount");
    console.log(node.outerHTML);
    createTippyjs(node);
  });

  // reactive
  $: classes = clsx(className, "dbx-popover");
</script>

<Portal disable={disablePortal}>
  <div bind:this={node} data-testid="pop-over">
    <Paper class={classes} {...$$restProps} data-testid="pop-over">
      <slot>
        <div>slot</div>
      </slot>
    </Paper>
  </div>
</Portal>

<style src="./styles/popover.scss" global>
</style>
