---
to: packages/theme-<%= _theme %>/<%= _category %>/<%= h.changeCase.pascal(_name) %>.d.ts
---
<%
  nameClass = h.changeCase.pascal(_name)
%>

export interface <%= nameClass %>Props {
  class?: string;
}

export type Events = {}

export type Slots = {}
