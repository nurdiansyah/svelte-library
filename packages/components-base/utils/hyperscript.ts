import _h from "svelte-hyperscript";
import type { SvelteComponent } from "svelte";
type H<P = Record<string, unknown>> = (
  type: string | typeof SvelteComponent,
  props?: P,
  ...children: unknown[]
) => typeof SvelteComponent;
const h: H = _h as any;

export default h;
