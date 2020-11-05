<script lang="ts">
  import { clsx } from "../utils";
  import NotchedOutline from "./NotchedOutline.svelte";
  import type { SvelteComponent } from "svelte/internal";

  let { class: className } = $$props;
  let classes: string | undefined;
  export let type: string = "text";
  export let label: string | undefined = undefined;
  export let plaintext: boolean = false;
  export let multiline: boolean = false;
  export let disabled: boolean = false;
  export let underline: boolean = true;
  export let color: "primary" | "secondary" = "primary";
  export let margin: "dense" | "none" | undefined = undefined;
  export let variant: "filled" | "outlined" | "standard" = "filled";
  export let readOnly: boolean = plaintext;
  export let focus: boolean = false;
  export let prepend: SvelteComponent | undefined = undefined;
  export let append: SvelteComponent | undefined = undefined;
  export let outlinedProps: object = {};

  $: classes = clsx(
    className,
    "dbx-input",
    disabled && "-disabled",
    margin === "dense" && "-dense",
    margin === "none" && "-no-margin",
    plaintext && "-plaintext",
    type === "search" && "-search",
    variant !== "standard" && `-${variant}`,
    underline && variant !== "outline" && `-underline`
  );

  const handleInput = (e) => {
    value = type.match(/^(number|range)$/) ? +e.target.value : e.target.value;
  };

  const handleFocus = () => {
    focus = true;
  };

  const handleBlur = () => {
    focus = false;
  };
</script>

<!--suppress XmlDuplicatedId, HtmlFormInputWithoutLabel -->
<div class="{classes}">
  {#if $$slots.prepend || prepend}
    <slot name="prepend">
      <svelte:component this="{prepend}" />
    </slot>
  {/if}
  {#if type === 'textarea' || multiline}
      <textarea
        {id}
        class="input"
        {...$$restProps}
        on:blur={handleBlur}
        on:focus={handleFocus}
        on:keydown
        on:keypress
        on:keyup
        on:change
        on:input>
        <slot />
      </textarea>
  {:else}
    <input
      {id}
      class="input"
      {value}
      {type}
      {...$$restProps}
      on:blur={handleBlur}
      on:focus={handleFocus}
      on:keydown
      on:keypress
      on:keyup
      on:change
      on:input="{handleInput}" />
  {/if}
  {#if variant === "outlined"}
    <NotchedOutline {label} {...outlinedProps} />
  {/if}
  <slot name="append">
    <svelte:component this="{append}" />
  </slot>
</div>

<style src="./input.scss">
</style>
