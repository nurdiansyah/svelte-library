<script lang="ts">
  import { clsx } from "../utils";

  export let light: boolean = false;
  export let inherit: boolean = false;
  export let absolute: boolean = false;
  export let variant: "middle" | "inset" | "fullWidth" = "fullWidth";
  export let orientation: "horizontal" | "vertical" = "horizontal";

  let { class: className } = $$props;
  let classes: string;

  $: classes = clsx(
    className,
    "dbx-divider",
    variant !== "fullWidth" && `-${variant}`,
    orientation !== "horizontal" && `-${orientation}`,
    absolute && "-absolute",
    light && "-light",
    inherit && "-inherit"
  );
</script>

<hr {...$$restProps} class={classes} />
