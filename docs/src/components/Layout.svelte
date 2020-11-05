<script lang="ts">
  import AppBar from "@deboxsoft/svelte-components-base/surfaces/AppBar.svelte";
  import Logo from "../includes/logo.md";
  import TopBar from "../includes/topbar.md";
  import Sidebar from "../includes/sidebar.md";

  let current_page = {
    subscribe() {
      window.scrollTo(0, 0);
    }
  };
  let windowWidth = 0;
  let showSidebar = false;
  let isMobile, title, noSidebar;

  $: isMobile = windowWidth < 800;
  $: showSidebar = isMobile ? showSidebar : false;
  $: title = $current_page.title ? $current_page.title + " — " + maintitle : maintitle;
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<AppBar>
  <div />
</AppBar>
