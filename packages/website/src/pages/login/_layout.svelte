<script lang="ts">
  import { authStore } from "../../module/auth/state";
  import { redirect } from "@sveltech/routify";
  const { user } = authStore;
  /**
   *  We don't want the login page to visible to logged in user, so we redirect them
   **/
  $: if ($user) $redirect("/");
</script>

<slot />
