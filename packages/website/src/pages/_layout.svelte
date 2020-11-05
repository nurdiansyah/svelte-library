<script lang="ts">
  import type { SvelteComponent } from "svelte";

  import { clsx } from "@deboxsoft/svelte-components-base/utils";
  import TopBar from "./_TopBar.svelte";
  import AsideBar from "./_AsideBar.svelte";
  import { getContext } from "../ui-store";

  const { store: uiStore } = getContext();

  let drawer, classes;

  $: {
    let minimized = !$uiStore.toggleSideMenuOn;
    classes = clsx("dbx-layout", "-sidebar-docked", minimized && "-sidebar-minimized");
  }
</script>

<div class={classes}>
  <AsideBar bind:drawer />

  <header class="header">
    <TopBar />
  </header>

  <main class="main-page">
    <slot />
  </main>
  <footer>footer</footer>
</div>

<style lang="scss" global>
  @use "styles/functions" as *;
  @use "styles/theme";

  .dbx-layout {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    > main {
      flex: 1 0 auto;
    }
    &.-sidebar-docked {
      > header,
      > main,
      > footer {
        margin-left: get-value(theme.$drawer, width);
      }

      &.-sidebar-minimized {
        > header,
        > main,
        > footer {
          margin-left: get-value(theme.$drawer, (minimized, width));
        }
      }
    }
  }
</style>
