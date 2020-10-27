<script lang="ts">
  import type { FormStore } from "./form/FormStore";
  import type { ValueCheck } from "../types/input";

  import { onMount } from "svelte";
  import { clsx } from "../utils";
  import { setContext } from "./form/form-control-context";
  import { getContext } from "./form/form-context";
  import Radio from "./Radio.svelte";
  import CheckBox from "./Checkbox.svelte";
  import Switch from "./Switch.svelte";
  import FormLabel from "./FormLabel.svelte";
  import Checkbox from "./Checkbox.svelte";

  /**
   * value data component FormCheck
   * @typedef {Object} ValueCheck
   * @property {string} label - label data
   * @property {*} value - value data
   * @property {boolean=} disabled - non aktifkan data
   * @property {string=} hint
   */
  // props
  /**
   * @type {('checkbox'|'radio'|'switch')}
   */
  export let type: "checkbox" | "radio" | "switch" = "checkbox";

  /**
   * @type {string}
   */
  export let name: string;

  /**
   * @type {boolean} [disabled=false]
   */
  export let disabled: boolean = false;

  /**
   * @type {ValueCheck[]} [selected[]]
   */
  export let selected: ValueCheck[] = [];

  /**
   *
   * @type {ValueCheck[]} [values=[]]
   */
  export let values: ValueCheck[] = [];

  /**
   *
   * @type {string[]} [errors[]]
   */
  export let errors: string[] = [];

  /**
   * @type {function(value: Value): void} [validate] - validate function
   */
  export let validate: ((value: any) => void) | undefined = undefined;

  /**
   *
   * @type {'small'} [size]
   */
  export let size: "small" | undefined = undefined;

  /**
   *
   * @type {boolean}
   */
  export let touched: boolean = false;

  // state
  let context = getContext();
  let { class: className, "data-testid": dataTestId } = $$props;
  let classes;
  let fieldState;
  let formStore: FormStore;
  let Component: any;
  delete $$restProps["data-testid"]; // remove variables node data-testid

  // handler
  onMount(() => {
    formStore = context.formStore;
    formStore.createField({ name, validate, value: selected, errors, touched });
    fieldState = formStore.getField(name);
  });

  /**
   *
   * @param {*} value
   */
  function isChecked(value: any) {
    if (selected.includes(value)) {
      return true;
    }
    return false;
  }

  function handleChange(e) {}

  // reactive
  $: classes = clsx(className, "form-check");
  $: {
    switch (type) {
      case "switch":
        Component = Switch;
        break;
      case "radio":
        Component = Radio;
        break;
      default:
        Component = Checkbox;
        break;
    }
  }
</script>

<div class={classes} data-testid={dataTestId}>
  {#each values as valueCheck}
    <FormLabel
      label={valueCheck.label}
      disabled={valueCheck.disabled}
      error={errors && errors.length > 0}
      let:idFor={_id}>
      <svelte:component
        this={Component}
        id={_id}
        {...$$restProps}
        disabled={disabled || valueCheck.disabled}
        checked={isChecked(valueCheck.value)}
        {size} />
    </FormLabel>
  {/each}
</div>
