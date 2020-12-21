<script lang="ts" context="module">
  import type { FormContext } from "./Form";
  import { getContext as getContextSvelte } from "svelte";

  const key = {};

  export const getContext: () => FormContext = () => getContextSvelte<FormContext>(key);
</script>

<script lang="ts">
  import { FormStore } from "./";
  import { setContext } from "svelte";

  export let initial: Record<string, FieldState> = {};
  export let formStore: FormStore = new FormStore({ initial });
  export let onSubmit: (() => void) | undefined = undefined;

  let submitCount: number = 0;

  setContext(key, { formStore });

  function submitHandler() {
    onSubmit && onSubmit();
    submitCount = formStore.submitCount;
  }
</script>

<form {...$$restProps} class:was-validated={submitCount > 0} novalidate on:submit|preventDefault={submitHandler}>
  <slot />
</form>
