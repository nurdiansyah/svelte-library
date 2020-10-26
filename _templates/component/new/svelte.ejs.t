---
to: packages/<%= _project %>/<%= _category %>/<%= h.changeCase.pascal(_name) %>.svelte
---
<%
  nameParam = h.changeCase.param(_name)
  prefix = "dbx";
  nameCss = prefix + "-" + nameParam;
%>

<script>
  import { clsx } from "<%= _testUtils %>";

  // props

  // state
  let { class: className } = $$props;
  let classes;

  // handler

  // reactive
  $: classes = clsx(className, "<%= nameCss %>");
</script>

<div {...$$restProps} class="{classes}">
  <slot />
</div>

<style src="./<%= nameParam %>.scss" global>
</style>

