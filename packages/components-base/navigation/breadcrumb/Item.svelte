<script lang="ts">
  import { clsx } from "../../utils";

  let { class: className } = $$props;
  let classes: string;
  let props: any;

  export let active: boolean = false;

  $: classes = clsx(className, "item", active && "-active");
  $: props = {
    "aria-current": active && "page"
  };
</script>

<li {...$$restProps} class={classes} {...props}>
  <slot />
</li>
