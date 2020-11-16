<script lang="ts">
  /**
   * @component Radio
   *
   * @example
   *
   * <Radio />
   */

  import RadioButtonUnchecked from "@deboxsoft/svelte-icons/RadioButtonUnchecked.svelte";
  import RadioButtonChecked from "@deboxsoft/svelte-icons/RadioButtonChecked.svelte";
  import { clsx } from "../utils";
  import InputCheck from "./InputCheck.svelte";
  import Icon from "../data-display/Icon.svelte";

  // props
  /**
   *
   * @type {boolean} [disabled=false]
   */
  export let disabled = false;

  /**
   *
   * @type {'small'} [size]
   */
  export let size = undefined;

  /**
   *
   * @type {boolean} [checked=false]
   */
  export let checked = false;

  let { class: className } = $$props;
  let classes;

  $: classes = clsx(className, "-radio");
</script>

<InputCheck {...$$restProps} type="radio" {checked} {size} {disabled}>
  <Icon {size} component={RadioButtonUnchecked} />
  <Icon class="layer" {size} component={RadioButtonChecked} />
</InputCheck>
