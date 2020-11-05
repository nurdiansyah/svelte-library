import { setContext as setSvelteContext, getContext as getSvelteContext } from "svelte";
import { writable, Writable } from "svelte/store";
import { getId } from "../../utils";
import type { DataList } from "../../types";

type Context = {
  dense?: boolean;
  dataListStore?: Writable<DataList>;
};

export const KEY = getId({ prefix: "CTX" });
export const createDataListStore = (dataList: DataList) => writable<DataList>(dataList);

export const setContext = (context: Context = {}) => {
  setSvelteContext<Context>(KEY, context);
};

export const getContext = () => {
  const context = getSvelteContext<Context>(KEY);
  return context;
};
