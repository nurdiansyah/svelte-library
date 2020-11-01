import { writable } from "svelte/store";

export interface UiStore {
  isDark: boolean;
}

export const uiStore = createUiStore();

function createUiStore() {
  const { update, set, subscribe } = writable<UiStore>({
    isDark: false
  });
  return {
    set,
    subscribe,
    toggleTheme: () => {
      update((_store) => {
        _store.isDark = !_store.isDark;
        return _store;
      });
    }
  };
}

export default uiStore;
