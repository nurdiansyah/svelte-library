<script lang="ts">
  import { Router } from "@sveltech/routify";
  import { routes } from "@sveltech/routify/tmp/routes";
  import { authStore } from "./module/auth/state";
  import { uiStore } from "./ui-store";

  const BodyClass = (node, options) => {
    document.body.classList.add("dbx-theme");
    return {
      update({ isDark }) {
        const darkClass = "-dark";
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
