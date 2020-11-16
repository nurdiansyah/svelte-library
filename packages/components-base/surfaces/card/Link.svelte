<script lang="ts">
  import { clsx } from "../../utils";

  let { class: className } = $$props;
  let classes: string | undefined;
  export let href: string | undefined = undefined;

  $: classes = clsx(className, "card-link");
</script>

<a {...$$restProps} class={classes} {href}>
  <slot />
</a>
