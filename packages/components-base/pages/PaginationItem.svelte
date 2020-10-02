<script lang="ts">
  import clsx from "clsx";

  let className: string | null = null,
    classes: string;
  export { className as class };
  export let active: boolean = false;
  export let disabled: boolean = false;

  $: classes = clsx(className, "item", active && "-active", disabled && "-disabled");
</script>

<!--
  @component
  active: boolean default false
  disabled: boolean default false
 ```svelte

   <PaginationItem >test</PagintaionItem>
 ```
 -->
<li {...$$restProps} class="{classes}">
  <slot />
</li>
