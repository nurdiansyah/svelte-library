<script lang="ts">
  import Button from "@deboxsoft/svelte-components-base/inputs/Button.svelte";
  import { authStore } from "../module/auth/state";
  const { signin } = authStore;
</script>

<div class="center-all">
  <Button variant="contained" color="secondary">button</Button>
</div>
