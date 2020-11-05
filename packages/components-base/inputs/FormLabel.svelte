<!-- svelte-ignore a11y-label-has-associated-control -->
<script lang="ts">
  import { clsx, getId } from "../utils";

  // state
  let { class: className } = $$props;
  let classes: string;

  // props
  export let color: "primary" | "secondary" = "primary";
  export let disabled: boolean = false;
  export let error: boolean = false;
  export let focused: boolean = false;
  export let required: boolean = false;
  export let label: string | undefined = undefined;
  export let labelPlacement: "start" | "top" | "bottom" | "end" = "end";
  export let generateIdFor: boolean = true;

  let idFor: string | undefined = (generateIdFor && getId()) || undefined;

  // handler

  // reactive
  $: classes = clsx(
    className,
    "form-label",
    `-color-${color}`,
    error && `-error`,
    disabled && "-disabled",
    required && "-required",
    focused && "-focused",
    label && labelPlacement !== "end" && `-label-placement-${labelPlacement}`
  );
</script>

<label {...$$restProps} class={classes} for={idFor}>
  <slot {idFor} />
  {#if label || $$slots['label']}
    <span class="label">
      <slot name="label">{label}</slot>
    </span>
  {:else if required}<span class="asterisk">&thinsp;{'*'}</span>{/if}
</label>
