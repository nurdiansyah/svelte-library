import { writable } from "svelte/store";
import createAuth0Client from "@auth0/auth0-spa-js";

const AUTH_CONFIG: any = {
  domain: "nurdiansyah.auth0.com",
  client_id: "qKllFBrrz0a32zNOB1aYXPs36XY6lR3d",
  cacheLocation: "localstorage"
};

export const authStore = createAuthStore();

function createAuthStore() {
  const loading = writable(true);
  const authenticated = writable(false);
  const user = writable(null);
  let auth0;

  async function init() {
    auth0 = await createAuth0Client(AUTH_CONFIG);
    await auth0.crossOriginVerification();
    // update store
    user.set(await auth0.getUser());
    loading.set(false);
    authenticated.set(true);
  }

  async function signin() {
    //display popup
    await auth0.loginWithPopup();

    //update store
    user.set(await auth0.getUser());
    authenticated.set(true);
  }

  async function signout() {
    // logout
    console.log("signout");
    await auth0.logout({ returnTo: window.location.pathname });
    // update store
    const authUser = await auth0.getUser();
    user.set(authUser);
    console.log(authUser);
    authenticated.set(false);
  }

  return { loading, authenticated, user, auth0, signin, signout, init };
}
