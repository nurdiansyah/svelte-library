<script lang="ts">
  import type { DataItem, DataList } from "@deboxsoft/svelte-components-base/data-display/types";

  import Drawer from "@deboxsoft/svelte-components-base/navigation/Drawer.svelte";
  import IconHome from "@deboxsoft/svelte-icons/Home.svelte";
  import IconLogin from "@deboxsoft/svelte-icons/Login.svelte";
  import IconBlock from "@deboxsoft/svelte-icons/Block.svelte";
  import List from "@deboxsoft/svelte-components-base/data-display/List.svelte";
  import ListItem from "@deboxsoft/svelte-components-base/data-display/ListItem.svelte";
  import { getContext as getContextStore } from "../ui-store";

  let minimized: boolean = false;
  const dataList: DataList = [
    { label: "home", href: "/", icon: IconHome },
    { label: "blog", href: "/blog", icon: IconBlock },
    { label: "login", href: "/login", icon: IconLogin }
  ];
  const { store: uiStore } = getContextStore();
</script>

<Drawer class="aside-bar" open={$uiStore.toggleSideMenuOn} variant="sticky" minimized={!$uiStore.toggleSideMenuOn}>
  <div>
    <div>Logo</div>
  </div>
  <div>drawer</div>
  <List {dataList} />
</Drawer>

<style lang="scss" global>
  .aside-bar {
    display: flex;
    > * {
      flex: 1 0 auto;
    }
  }

  .dbx-drawer.-minimized .list-item {
    .item-label,
    > .avatar,
    > .secondary-action {
      visibility: hidden;
    }
  }
</style>
