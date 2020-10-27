<script>
  /**
   * CheckBox Element
   * @component CheckBox
   * @example
   * <CheckBox />
   *
   */

  import CheckBoxOutlineBlankIcon from "@deboxsoft/svelte-icons/CheckBoxOutlineBlank.svelte";
  import CheckBoxIcon from "@deboxsoft/svelte-icons/CheckBox.svelte";
  import IndeterminateCheckBoxIcon from "@deboxsoft/svelte-icons/IndeterminateCheckBox.svelte";
  import Icon from "../data-display/Icon.svelte";
  import { clsx } from "../utils";
  import InputCheck from "./InputCheck.svelte";

  // props
  /**
   *
   * @type {boolean}
   */
  export let disabled = false;

  /**
   *  size component
   *  @type {('default'|'small')}[size='default']
   */
  export let size;

  /**
   * checked
   * @type {boolean}
   */
  export let checked = false;

  /**
   *
   * @type {boolean}
   */
  export let indeterminate = false;

  let { class: className } = $$props;
  let classes;

  $: classes = clsx(className, "-checkbox");
</script>

<InputCheck {...$$restProps} type="checkbox" {checked} {size} {disabled}>
  {#if indeterminate}
    <Icon {size} component={IndeterminateCheckBoxIcon} />
  {:else if checked}
    <Icon {size} component={CheckBoxIcon} />
  {:else}
    <Icon {size} component={CheckBoxOutlineBlankIcon} />
  {/if}
</InputCheck>
