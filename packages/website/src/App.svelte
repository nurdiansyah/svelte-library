<script lang="ts">
  import { Router } from "@sveltech/routify";
  import { routes } from "@sveltech/routify/tmp/routes";
  import { authStore } from "./module/auth/state";
  import { createContext as createContextStore } from "./ui-store";

  const { toggleTheme, store: uiStore } = createContextStore();
  const BodyClass = (node, { isDark }) => {
    const darkClass = "-dark";
    document.body.classList.add("dbx-theme");
    isDark && document.body.classList.add(darkClass);
    return {
      update({ isDark }) {
        document.body.classList.remove(darkClass);
        if (isDark) {
          document.body.classList.add(darkClass);
        }
      }
    };
  };

  // @ts-ignore
  setTimeout(() => window.routify.inBrowser && authStore.init());
</script>

<div use:BodyClass={$uiStore}>
  <Router {routes} />
</div>

<style lang="scss" global>
  @use "styles/init";
  @use "styles/highlight";
</style>
