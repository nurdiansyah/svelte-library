---
to: packages/<%= _project %>/<%= _category %>/<%= h.changeCase.pascal(_name) %>.svelte
---

<%
  nameParam = h.changeCase.param(_name)

  prefix = "dbx";
  nameCss = prefix + "-" + nameParam;
%>

<script lang="ts">
  import { clsx } from "../utils";

  // state
  let className: string | null = null,
    classes: string;

  // props
  export { className as class };

  // handler

  // reactive
  $: classes = clsx(className, "<%= nameCss %>");
</script>

<div {...$$restProps} class="{classes}" data-testid="<%= nameParam  %>">
  <slot />
</div>

<style src="./<%= nameParam %>.scss" global>
</style>

