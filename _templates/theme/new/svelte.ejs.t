---
to: packages/theme-<%= _theme %>/<%= _category %>/<%= h.changeCase.pascal(_name) %>.svelte
---
<%
  nameClass = h.changeCase.pascal(_name)
  nameParam = h.changeCase.param(_name)
  prefix = "dbx";
  nameCss = prefix + "-" + nameParam;
%>
<script lang="ts">
  import { clsx } from "../utils";

  // props

  // state
  let { class: className } = $$props;
  let classes: string | undefined;

  // handler

  // reactive
  $: classes = clsx(className, "<%= nameCss %>");
</script>

<div {...$$restProps} class="{classes}">
  <slot />
</div>


