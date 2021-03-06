<script lang="ts">
  import { clsx } from "@deboxsoft/svelte-components-base/utils";

  import AppBar from "@deboxsoft/svelte-components-base/surfaces/AppBar.svelte";
  import Toolbar from "@deboxsoft/svelte-components-base/inputs/Toolbar.svelte";
  import Button from "@deboxsoft/svelte-components-base/inputs/Button.svelte";
  import ButtonIcon from "@deboxsoft/svelte-components-base/inputs/ButtonIcon.svelte";
  import IconMenu from "@deboxsoft/svelte-icons/Menu.svelte";

  import { authStore } from "../module/auth/state";
  import { getContext } from "../ui-store";

  const { store: uiStore, toggleTheme, toggleSideMenu } = getContext();

  const { user, signout, authenticated } = authStore;
  const links = [
    ["/index", "home"],
    ["/blog", "blog"],
    ["/admin", "admin"]
  ];
</script>

<AppBar position="fixed" color={(!$uiStore.isDark && 'primary') || 'default'}>
  <Toolbar variant="dense">
    <div class="header-logo">Logo</div>
    <ButtonIcon class="toggle-menu" on:click={() => toggleSideMenu(!$uiStore.toggleSideMenuOn)}>
      <IconMenu />
    </ButtonIcon>
    {#each links as link}
      <Button href={link[0]}>{link[1]}</Button>
    {/each}
    <div class="appbar-space" />
    <ButtonIcon on:click={() => toggleTheme(!$uiStore.isDark)}>
      <svg viewBox="0 0 24 24" focusable="false">
        {#if $uiStore.isDark}
          <path
            d="M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm0-10c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z" />
        {:else}
          <path
            d="M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zM12 18c-.89 0-1.74-.2-2.5-.55C11.56 16.5 13 14.42 13 12s-1.44-4.5-3.5-5.45C10.26 6.2 11.11 6 12 6c3.31 0 6 2.69 6 6s-2.69 6-6 6z" />
        {/if}
      </svg>
    </ButtonIcon>
    {#if $authenticated}
      <Button on:click={signout} href="/">Logout</Button>
    {:else}
      <Button href="/login">Login</Button>
    {/if}
  </Toolbar>
</AppBar>

<style lang="scss" global>
  @use "styles/mixins" as mix;
  @use "styles/theme";

  .header-logo {
  }

  .appbar-space {
    flex-grow: 1;
  }

  .toggle-menu {
    @include mix.media-breakpoint-up(md) {
      //display: none;
    }
  }
</style>
