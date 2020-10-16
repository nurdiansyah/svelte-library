---
inject: true
to: packages/<%= _project %>/<%= _category %>/index.ts
skip_if: import { default as <%= h.changeCase.pascal(_name) %> } from "./<%= h.changeCase.pascal(_name)%>.svelte";
---

import { default as <%= h.changeCase.pascal(_name) %> } from "./<%= h.changeCase.pascal(_name)%>.svelte";
