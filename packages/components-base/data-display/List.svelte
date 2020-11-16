<script lang="ts">
  import type { SvelteComponent } from "svelte/internal";
  import type { DataList } from "./types";

  import { clsx } from "../utils";
  import { setContext } from "./list/context";
  import ListItem from "./ListItem.svelte";
  import Icon from "@deboxsoft/svelte-components-base/data-display/Icon.svelte";

  // state
  let { class: className } = $$props;
  let classes: string | undefined;

  // props
  export let disablePadding: boolean = false;
  export let dataList: DataList = [];
  export let dense: boolean = false;
  export let subheader: SvelteComponent | undefined = undefined;
  export let node: HTMLElement | undefined = undefined;

  // context
  setContext({ dense });

  // handler

  // reactive
  $: classes = clsx(
    className,
    "dbx-list",
    ($$slots.subheader || subheader) && "-subheader",
    !disablePadding && "-padding",
    dense && "-dense"
  );
</script>

<div class={classes} {...$$restProps} role="menu" on:keydown bind:this={node}>
  {#if $$slots['subheader']}
    <div class="subheader">
      <slot name="subheader" />
    </div>
  {/if}
  {#each dataList as data}
    <div class="item">
      <slot {data}>
        <ListItem {...data}>{data.label}</ListItem>
      </slot>
    </div>
    {#if data.dataList}
      <svelte:self {...$$props} dataList={data.dataList} />
    {/if}
  {/each}
</div>

<style src="./styles/list.scss" global>
</style>
