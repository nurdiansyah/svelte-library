import { writable } from "svelte/store";
import type { Optional } from "utility-types";

interface Notifier {
  message: string;
  type: string;
  subMessage?: string;
  icon?: string;
  action?: string;
  unread?: boolean;
}

type Toast = Notifier & { timeout: number };
type NotifyOptions = Optional<Toast, "timeout">;
type ToastOptions = Omit<NotifyOptions, "type">;
type ToastStore = Toast[];
type NotifierStore = Notifier[];

const sendToast = (options: NotifyOptions) => {
  options.timeout = options.timeout || 10;
  toastStore.update((value) => [...value, options as Toast]);
};

const sendNotify = (options: NotifyOptions) => {
  if (options.timeout) {
    sendToast(options);
    delete options.timeout;
  }
  notifierStore.update((value) => [...value, options as Notifier]);
};

const toastStore = writable<ToastStore>([]);

const notifierStore = writable<NotifierStore>([]);

export const toast = {
  info: (options: ToastOptions) => sendToast({ type: "info", ...options }),
  success: (options: ToastOptions) => sendToast({ type: "success", ...options }),
  warning: (options: ToastOptions) => sendToast({ type: "warning", ...options }),
  error: (options: ToastOptions) => sendToast({ type: "error", ...options }),
  danger: (options: ToastOptions) => sendToast({ type: "danger", ...options }),
  reset: () => toastStore.set([]),
  subscribe: toastStore.subscribe,
  store: notifierStore
};

export const notify = {
  info: (options: ToastOptions) => sendNotify({ type: "info", ...options }),
  success: (options: ToastOptions) => sendNotify({ type: "success", ...options }),
  warning: (options: ToastOptions) => sendNotify({ type: "warning", ...options }),
  error: (options: ToastOptions) => sendNotify({ type: "error", ...options }),
  danger: (options: ToastOptions) => sendNotify({ type: "danger", ...options }),
  reset: () => notifierStore.set([]),
  subscribe: notifierStore.subscribe,
  store: notifierStore
};
