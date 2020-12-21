---
inject: true
to: packages/theme-<%= _theme %>/<%= _category %>/index.d.ts
skip_if: import type { SvelteComponentTyped } from "svelte";
after:
---

import type { SvelteComponentTyped } from "svelte";
