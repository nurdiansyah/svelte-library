<script lang="ts">
  import { clsx } from "@deboxsoft/svelte-components-base/utils";
  import Navigation from "./_navigation.svelte";
  import { uiStore } from "../ui-store";
  import { authStore } from "../module/auth/state";
</script>

<header>
  <Navigation />
</header>

<main>
  <slot />
</main>

<style lang="scss" global>
</style>
