<script>
  import { getContext } from "svelte";
  import { classNames } from "../../utils";

  import Button from "./Button.svelte";

  const context = getContext("dropdownContext");

  let className = "";
  export { className as class };
  export let caret: boolean = false;
  export let color = "secondary";
  export let disabled: boolean = false;
  export let ariaHaspopup: boolean = true;
  export let ariaLabel = "Toggle Dropdown";
  export let split: boolean = false;
  export let nav: boolean = false;
  export let size: string | null = null;
  export let tag = null;
  export let outline: boolean = false;

  $: classes = clsx(className, {
    "dropdown-toggle": caret || split,
    "dropdown-toggle-split": split,
    "nav-link": nav
  });

  function toggleButton(e) {
    if (disabled) {
      e.preventDefault();
      return;
    }

    if (nav) {
      e.preventDefault();
    }

    $context.toggle(e);
  }
</script>

{#if nav}
  <a {...$$restProps} on:click on:click="{toggleButton}" href="#" {ariaHaspopup} class="{classes}">
    <slot>
      <span class="sr-only">{ariaLabel}</span>
    </slot>
  </a>
{:else if tag === 'span'}
  <span {...$$restProps} on:click on:click="{toggleButton}" {ariaHaspopup} class="{classes}" {color} {size}>
    <slot>
      <span class="sr-only">{ariaLabel}</span>
    </slot>
  </span>
{:else}
  <Button {...$$restProps} on:click on:click="{toggleButton}" {ariaHaspopup} class="{classes}" {color} {size} {outline}>
    <slot>
      <span class="sr-only">{ariaLabel}</span>
    </slot>
  </Button>
{/if}
