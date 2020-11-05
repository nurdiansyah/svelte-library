import { setContext, getContext as getContextSvelte } from "svelte";
import { writable, Readable } from "svelte/store";

export interface Store {
  isDark?: boolean;
  toggleSideMenuOn?: boolean;
}

const createUiStore = () => {
  const isDark = localStorage.getItem("is-dark");
  const toggleSideMenuOn = localStorage.getItem("toggle-side-menu-on");
  const store = writable<Store>({
    isDark: isDark === "true" || false,
    toggleSideMenuOn: toggleSideMenuOn === "true" || false
  });
  return store;
};

const store = createUiStore();

export type Context = {
  store: Readable<Store>;
  toggleTheme: (isDark: boolean) => void;
  toggleSideMenu: (on: boolean) => void;
};

const key = {};

const toggleTheme = (isDark: boolean) => {
  localStorage.setItem("is-dark", String(isDark));
  store.update((s) => {
    s.isDark = isDark;
    return s;
  });
};

const toggleSideMenu = (on: boolean) => {
  // localStorage.setItem("toggle-side-menu-on", String(on));
  store.update((s) => {
    return { ...s, ...{ toggleSideMenuOn: on } };
  });
};

export const createContext = () => {
  setContext<Context>(key, {
    store,
    toggleTheme,
    toggleSideMenu
  });
  return getContext();
};

export const getContext = (): Context => getContextSvelte<Context>(key);
