<script lang="ts">
  import clsx from "clsx";

  let className: string | null = null,
    classes: string,
    fore: string;

  export { className as class };
  export let visualHidden: boolean = false;
  export let col: boolean = false;
  export let sizing: "sm" | "lg";
  export { fore as for };

  $: classes = clsx(className, visualHidden && "visual-hidden", sizing && `-${sizing}`, (sizing || col) && "-col");
</script>

<label {...$$restProps} class="{classes}" for="{fore}">
  <slot />
</label>
