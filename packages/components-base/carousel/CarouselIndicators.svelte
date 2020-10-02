<script lang="ts">
  import clsx from "clsx";

  let className: string | null = null,
    classes: string;
  export { className as class };
  export let items: any[] = [];
  export let activeIndex: number = 0;
  export let id: string | null = null;

  $: classes = clsx(className, "carousel-indicators");
</script>

<ol {...$$restProps} {id} class="{classes}">
  {#each items as item, index}
    <li class:active="{activeIndex === index}" on:click="{() => (activeIndex = index)}"></li>
  {/each}
</ol>
