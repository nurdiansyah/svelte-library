<script lang="ts">
  import clsx from "clsx";
  import { getId } from "../utils";

  let className: string | null = null,
    classes: string;
  export let type: string = "text";
  export let id: string = getId();
  export let value: any;

  $: classes = clsx(className, "form-control");

  const handleInput = (e) => {
    value = type.match(/^(number|range)$/) ? +e.target.value : e.target.value;
  };
</script>

<!--suppress XmlDuplicatedId, HtmlFormInputWithoutLabel -->
{#if type === 'textarea'}
  <textarea {id} class="{classes}" {...$$restProps} on:blur on:focus on:keydown on:keypress on:keyup on:change on:input>
    <slot/>
  </textarea>
{:else if type === 'plaintext'}
  <input
    {id}
    class="{classes} -plaintext"
    type="text"
    {...$$restProps}
    on:blur
    on:focus
    on:keydown
    on:keypress
    on:keyup
    on:change
    on:input="{handleInput}" />
{:else}
  <input
    {id}
    class="{classes}"
    {value}
    {type}
    {...$$restProps}
    on:blur
    on:focus
    on:keydown
    on:keypress
    on:keyup
    on:change
    on:input="{handleInput}" />
{/if}

<style lang="scss" global>
  @use "./form-control";
</style>
