---
inject: true
to: packages/theme-<%= _theme %>/<%= _category %>/index.d.ts
skip_if: import { <%= h.changeCase.pascal(_name) %>Props, Events, Slots } from "./<%= h.changeCase.pascal(_name) %>";
after: import
---

import type { <%= h.changeCase.pascal(_name) %>Props, Events, Slots } from "./<%= h.changeCase.pascal(_name) %>";
