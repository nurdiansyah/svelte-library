<script lang="ts">
  import type { InputCheckProps } from "./types";

  /**
   *
   * @component InputCheck
   *
   */

  import { clsx, getId } from "../utils";
  import ButtonIcon from "./ButtonIcon.svelte";

  // props
  /**
   *
   * @type {boolean}
   */
  export let disabled: InputCheckProps["disabled"] = false;

  /**
   *
   * @type {boolean}
   */
  export let checked: InputCheckProps["checked"] = false;

  /**
   *
   * @type {*}
   */
  export let buttonProps = {};

  /**
   *
   * @type {boolean}
   */
  export let focused: InputCheckProps["focused"] = false;

  /**
   *
   * @type {?'small'}
   */
  export let size: InputCheckProps["size"] = undefined;

  /**
   * @type {string}
   */
  export let type: InputCheckProps["type"] = "checkbox";

  // state
  let { class: className } = $$props;

  /**
   * @type {string}
   */
  let classes;

  // handler

  // reactive
  $: classes = clsx(
    className,
    "input-check",
    size && `-size-${size}`,
    checked && "-checked",
    disabled && "-disabled",
    focused && "-focused"
  );
</script>

<span class={classes}>
  <ButtonIcon {...buttonProps} {disabled}>
    <input {...$$restProps} class="input" {type} {disabled} {checked} on:onchange on:blur on:click on:focus />
    <slot />
  </ButtonIcon>
  <slot name="track" />
</span>

<style src="./styles/input-check.scss" global>
</style>
