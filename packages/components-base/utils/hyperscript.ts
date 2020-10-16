import _h from "svelte-hyperscript";
import type { SvelteComponent } from "svelte";
type H = (
  type: string | typeof SvelteComponent,
  props?: Record<string, unknown> | null,
  ...children: unknown[]
) => typeof SvelteComponent;
const h: H = _h as any;

export default h;
