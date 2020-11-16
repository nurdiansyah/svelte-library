<script lang="ts">
  import type { SvelteComponent } from "svelte/internal";
  import type { AvatarProps, ListItemProps } from "./types";

  import { clsx } from "../utils";
  import { getContext } from "./list/context";
  import Icon from "./Icon.svelte";
  import Div from "../utils/Div.svelte";
  import Button from "../inputs/Button.svelte";
  import Avatar from "@deboxsoft/svelte-components-base/data-display/Avatar.svelte";

  let { class: className } = $$props;
  let classes: string | undefined;
  const ctx = getContext();

  export let alignItems: ListItemProps["alignItems"] = "center";
  export let autofocus: ListItemProps["autofocus"] = false;
  export let avatar: ListItemProps["avatar"] = undefined;
  export let button: ListItemProps["button"] = false;
  export let component: ListItemProps["component"] = undefined;
  export let dense: ListItemProps["dense"] = false;
  export let disabled: ListItemProps["disabled"] = false;
  export let disableGutter: ListItemProps["disableGutter"] = false;
  export let divider: ListItemProps["divider"] = false;
  export let href: ListItemProps["href"] = undefined;
  export let icon: ListItemProps["icon"] = undefined;
  export let iconProps: ListItemProps["iconProps"] = {};
  export let label: ListItemProps["label"] = undefined;
  export let labelInset: ListItemProps["labelInset"] = false;
  export let secondaryAction: ListItemProps["secondaryAction"] = undefined;
  export let selected: ListItemProps["selected"] = false;
  export let subLabel: ListItemProps["subLabel"] = undefined;

  let node: HTMLElement, Component: typeof SvelteComponent, avatarProps: Partial<AvatarProps>;

  $: Component = component || (href || button ? Button : Div);
  $: {
    classes = clsx(
      className,
      "list-item",
      (dense || ctx.dense) && "-dense",
      !disableGutter && "-gutters",
      divider && "-divider",
      disabled && "-disabled",
      button && "-button",
      alignItems === "flex-start" && "-align-items-flex-start",
      $$slots["secondary-action"] || (secondaryAction && "-has-secondary-action"),
      selected && "-selected"
    );
  }

  $: avatarProps = avatar && (typeof avatar === "string" ? { src: avatar } : avatarProps);

  $: {
    if (node && node.focus && autofocus) {
      node.focus();
    }
  }
</script>

<svelte:component this={Component} {...$$restProps} class={classes} {href} {node}>
  {#if $$slots['avatar'] || avatarProps}
    <slot name="avatar" classAvatar="avatar">
      <Avatar {...avatarProps} class="avatar" />
    </slot>
  {/if}
  <slot name="icon" classIcon="icon">
    {#if icon}
      <Icon class="icon" component={icon} {...iconProps} />
    {/if}
  </slot>
  <div class="item-label" class:-multiline={$$slots['sub-label']} class:-inset={labelInset}>
    <div class="label">
      <slot>{label}</slot>
    </div>
    {#if $$slots['sub-label'] || subLabel}
      <slot name="sub-label" classSubLabel="sub-label">
        <div class="sub-label">{subLabel}</div>
      </slot>
    {/if}
  </div>
  {#if $$slots['secondary-action']}
    <div class="secondary-action">
      <slot name="secondary-action" />
    </div>
  {/if}
</svelte:component>
