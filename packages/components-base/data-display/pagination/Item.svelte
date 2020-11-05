<script lang="ts">
  import { clsx } from "../../utils";

  let { class: className } = $$props;
  let classes: string | undefined;
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
