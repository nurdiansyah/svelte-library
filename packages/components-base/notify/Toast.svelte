<script lang="ts">
  import clsx from "clsx";
  import { fade as fadeTrans } from "svelte/transition";
  import { toast } from "./store";
  import Alert from "./Alert.svelte";

  let store = toast.store;
  let className: string | null = null,
    classes: string;
  export { className as class };
  export let positions: string = "top-left";
  export let duration: number = 200;
  export let fade: boolean = true;
  export let type: string | null = null;

  $: classes = clsx(className, "toast", positions);
</script>

<div
  {...$$restProps}
  class="{classes}"
  transition:fadeTrans="{{ duration: (fade && duration) || undefined }}"
  role="alert">
  {#each $store as notif}
    <Alert {...$$restProps} {type}>
      {#if notif.icon}{notif.icon}{/if}
      {notif.message} {notif.subMessage}
    </Alert>
  {/each}
</div>

<style lang="scss" global>
  @use "./toast";
</style>
