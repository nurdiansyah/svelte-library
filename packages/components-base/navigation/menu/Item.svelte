<script lang="ts">
  import { clsx } from "../../utils";

  let { class: className } = $$props;
  let classes: string | undefined;

  $: classes = clsx(className);
</script>

<div>
  <slot />
</div>
