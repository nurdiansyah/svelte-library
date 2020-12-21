---
inject: true
to: packages/theme-<%= _theme %>/<%= _category %>/index.js
skip_if: export { default as <%= h.changeCase.pascal(_name) %> } from "./<%= h.changeCase.pascal(_name) %>.svelte";
after:
---

export { default as <%= h.changeCase.pascal(_name) %> } from "./<%= h.changeCase.pascal(_name) %>.svelte";
