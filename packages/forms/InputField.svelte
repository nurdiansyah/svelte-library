<script lang="ts">
  import type { FieldStore, FormStore, Validate } from "./";
  import { getContext } from "./Form.svelte";

  export let name: string;
  export let fieldStore: FieldStore | undefined = undefined;
  export let multiple: boolean = false;
  export let value: any = undefined;
  export let errors: string[] = [];
  export let touched: boolean = false;
  export let validate: Validate | undefined = undefined;

  const { formStore }: { formStore: FormStore } = getContext();
  let isValid: boolean = false;
  let isInvalid: boolean = false;
  let _fieldStore: FieldStore;
  let _ref: HTMLInputElement;

  // register fieldState to fieldStore
  if (fieldStore) {
    formStore.addFieldStore(name, fieldStore);
  } else {
    formStore.addField(name, { value, errors, touched, validate });
  }
  $: _fieldStore = fieldStore || formStore.getFieldStore(name);
  $: {
    console.log($_fieldStore.value);
  }
  $: {
    if ($_fieldStore.touched) {
      isValid = $_fieldStore?.errors?.length === 0;
      isInvalid = $_fieldStore?.errors?.length > 0;
    }
  }
</script>

{#if multiple}
  <textarea
    {...$$restProps}
    {name}
    value={$_fieldStore.value || ''}
    bind:this={_ref}
    class:is-valid={isValid}
    class:is-invalid={isInvalid}
    on:click
    on:input={formStore.handleInput(name)} />
  <div class="invalid-feedback">{_ref && _ref.validationMessage}</div>
  <slot />
{:else}
  <input
    {...$$restProps}
    {name}
    value={$_fieldStore.value || ''}
    bind:this={_ref}
    class:is-valid={isValid}
    class:is-invalid={isInvalid}
    on:click
    on:input={formStore.handleInput(name)} />
  <div class="invalid-feedback">{_ref && _ref.validationMessage}</div>
  <slot />
{/if}
