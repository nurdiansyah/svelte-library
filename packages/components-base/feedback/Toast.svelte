<script lang="ts">
  import { clsx } from "../utils";
  import { fade as fadeTrans } from "svelte/transition";
  import { toast } from "./store";
  import Alert from "./Alert.svelte";

  let store = toast.store;
  let { class: className } = $$props;
  let classes: string | undefined;
  export let positions: string = "top-left";
  export let duration: number = 200;
  export let fade: boolean = true;
  export let type: string | undefined = undefined;

  $: classes = clsx(className, "toast", positions);
</script>

<div {...$$restProps} class={classes} transition:fadeTrans={{ duration: (fade && duration) || undefined }} role="alert">
  {#each $store as notif}
    <Alert {...$$restProps} {type}>
      {#if notif.icon}{notif.icon}{/if}
      {notif.message}
      {notif.subMessage}
    </Alert>
  {/each}
</div>

<style lang="scss" global>
  @use "./toast";
</style>
