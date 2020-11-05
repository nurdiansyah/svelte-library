<script lang="ts">
  import { clsx } from "../utils";
  import IconCancel from "@deboxsoft/svelte-icons/Cancel.svelte";
  import Avatar from "./Avatar.svelte";
  import Icon from "./Icon.svelte";
  import type { element, SvelteComponent } from "svelte/internal";

  // state
  let { class: className } = $$props;
  let classes: string;
  let prependProps: Object;
  let chipNode: HTMLElement | null;
  let prependComponent: typeof SvelteComponent;

  // props
  export let avatarProps: Record<string, any> | undefined = undefined;
  export let iconProps: Record<string, any> | undefined = undefined;
  export let color: "default" | "primary" | "secondary" = "default";
  export let clickable: boolean = false;
  export let disabled: boolean = false;
  export let size: "small" | undefined = undefined;
  export let variant: "default" | "outlined" = "default";
  export let label: string | undefined = undefined;
  export let onDelete: null | ((e: Event) => void) = null;
  export let onClick: null | ((e: Event) => void) = null;
  export let onKeyUp: null | ((e: KeyboardEvent) => void) = null;
  export let onKeyDown: null | ((e: KeyboardEvent) => void) = null;

  // handler
  function isDeleteKeyboardEvent(e: KeyboardEvent) {
    return e.key === "Backspace" || e.key === "Delete";
  }

  function handleKeyDown(e: KeyboardEvent) {
    // ignore events from children of `Chip`
    if (e.currentTarget === e.target) {
      // will be handled in keyUp, otherwise some browser
      // might init navigation
      e.preventDefault();
    }

    onKeyDown && onKeyDown(e);
  }

  function handleKeyUp(e: KeyboardEvent) {
    // ignore events from children of `Chip`
    if (e.currentTarget === e.target) {
      if (onDelete && isDeleteKeyboardEvent(e)) {
        onDelete(e);
      } else if (e.key === "Escape" && chipNode) {
        chipNode.blur();
      }
    }

    onKeyUp && onKeyUp(e);
  }

  // reactive
  $: classes = clsx(
    className,
    "dbx-chip",
    color !== "default" && `-color-${color}`,
    onDelete && "-deleteable",
    variant !== "default" && `-${variant}`,
    size !== `-size-${size}`,
    disabled && "-disabled"
  );

  $: {
    if (avatarProps) {
      prependComponent = Avatar;
      prependProps = avatarProps;
    } else if (iconProps) {
      prependComponent = Icon;
      prependProps = iconProps;
    }
  }
</script>

<div {...$$restProps}>
  <slot />
</div>

<style src="./styles/chip.scss" global>
</style>
