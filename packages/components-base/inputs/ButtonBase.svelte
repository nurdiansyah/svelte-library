<script lang="ts">
  import type { SvelteComponent } from "svelte";
  import type { RippleOptions } from "../actions";

  import { clsx } from "../utils";
  import { ripple, focusVisible as focusVisibleAction } from "../actions";

  let { class: className, href } = $$props;
  let classes: string;
  let focusVisible: boolean = false;

  export let disabled: boolean = false;
  export let link: boolean = false;
  export let focusVisibleClass: string | undefined = undefined;
  export let rippleOptions: RippleOptions = {};
  export let rippleDisable: boolean = false;
  export let tagDiv: boolean = false;

  let isFocusVisible: (e: Event) => undefined;
  let onBlurVisible: (e: Event) => undefined;

  $: classes = clsx(className, "button-base", focusVisible && !disabled && (focusVisibleClass || "-focus-visible"));

  const handleIsFocusVisible = ({ isFocusVisible: _isFocusVisible, onBlurVisible: _onBlurVisible }) => {
    isFocusVisible = _isFocusVisible;
    onBlurVisible = _onBlurVisible;
  };

  const handleBlur = (e: Event) => {
    focusVisible = false;
    onBlurVisible && onBlurVisible(e);
  };

  const handleFocus = (e: Event) => {
    if (isFocusVisible && isFocusVisible(e)) {
      focusVisible = true;
    }
  };
  $: rippleOptions = { ...rippleOptions, ...{ focusRippleEnable: !rippleDisable } };
</script>

{#if href || link}
  <a
    {...$$restProps}
    class={classes}
    on:click
    on:blur
    on:focus
    on:blur={handleBlur}
    on:focus={handleFocus}
    href={href || '#'}
    use:ripple={rippleOptions}
    use:focusVisibleAction={{ onFocusVisible: handleIsFocusVisible }}>
    <slot />
  </a>
{:else if tagDiv}
  <div
    {...$$restProps}
    class={classes}
    on:click
    on:blur
    on:focus
    on:blur={handleBlur}
    on:focus={handleFocus}
    use:ripple={rippleOptions}
    use:focusVisibleAction={{ onFocusVisible: handleIsFocusVisible }}>
    <slot />
  </div>
{:else}
  <button
    {...$$restProps}
    class={classes}
    on:click
    on:blur
    on:focus
    on:blur={handleBlur}
    on:focus={handleFocus}
    use:ripple={rippleOptions}
    use:focusVisibleAction={{ onFocusVisible: handleIsFocusVisible }}>
    <slot />
  </button>
{/if}

<style src="./styles/button-base.scss" global>
</style>
