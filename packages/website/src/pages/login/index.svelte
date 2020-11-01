<script>
  import { authStore } from "../../module/auth/state";
  import Container from "@deboxsoft/svelte-components-base/layout/Container.svelte";
  import Grid from "@deboxsoft/svelte-components-base/layout/Grid.svelte";
  import Paper from "@deboxsoft/svelte-components-base/surfaces/Paper.svelte";
  const { signin } = authStore;
</script>

<div class="layout-content">
  <Paper>
    <Grid container>
      <div>container</div>
    </Grid>
  </Paper>
</div>

<style lang="scss" global>
  .layout-content {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: calc(100vh - 50px);
    .dbx-paper {
      flex: 0 1 444px;
      padding: 24px;
      margin: auto;
    }
  }
</style>
