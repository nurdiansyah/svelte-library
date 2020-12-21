---
inject: true
to: packages/theme-<%= _theme %>/<%= _category %>/index.d.ts
skip_if: export interface <%= h.changeCase.pascal(_name) %> extends SvelteComponentTyped<<%= h.changeCase.pascal(_name) %>Props> {}
after: export
---
export class <%= h.changeCase.pascal(_name) %> extends SvelteComponentTyped<Partial<<%= h.changeCase.pascal(_name) %>Props>, Events, Slots> {}
