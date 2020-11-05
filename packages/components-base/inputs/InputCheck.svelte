<script>
  /**
   *
   * @component InputCheck
   *
   */

  import { clsx, getId } from "../utils";
  import ButtonIcon from "./ButtonIcon.svelte";

  // state
  let { class: className } = $$props;

  /**
   * @type {string}
   */
  let classes;

  // props
  /**
   *
   * @type {boolean}
   */
  export let disabled = false;

  /**
   *
   * @type {boolean}
   */
  export let checked = false;

  /**
   *
   * @type {*}
   */
  export let buttonProps = {};

  /**
   *
   * @type {boolean}
   */
  export let focused = false;

  /**
   *
   * @type {?'small'}
   */
  export let size = undefined;

  /**
   * @type {string}
   */
  export let type = "checkbox";

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
