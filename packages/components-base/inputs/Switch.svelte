<script lang="ts">
  /**
   * @component Switch
   *
   * @example
   *
   * <Switch />
   */

  import { clsx } from "../utils";
  import InputCheck from "./InputCheck.svelte";

  // props
  /**
   *
   * @type {boolean} [disabled=false]
   */
  export let disabled = false;

  /**
   *
   * @type {'small'} [size]
   */
  export let size = undefined;

  /**
   *
   * @type {boolean} [checked=false]
   */
  export let checked = false;

  let { class: className } = $$props;
  let classes;

  $: classes = clsx(className, "-switch");
</script>

<InputCheck {...$$restProps} type="checkbox" {checked} {size} {disabled}>
  <span class="icon-thumb" />
  <span slot="track" class="track" />
</InputCheck>
