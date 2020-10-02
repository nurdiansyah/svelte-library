"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notify = exports.toast = void 0;
const store_1 = require("svelte/store");
const sendToast = (options) => {
    options.timeout = options.timeout || 10;
    toastStore.update((value) => [...value, options]);
};
const sendNotify = (options) => {
    if (options.timeout) {
        sendToast(options);
        delete options.timeout;
    }
    notifierStore.update((value) => [...value, options]);
};
const toastStore = store_1.writable([]);
const notifierStore = store_1.writable([]);
exports.toast = {
    info: (options) => sendToast({ type: "info", ...options }),
    success: (options) => sendToast({ type: "success", ...options }),
    warning: (options) => sendToast({ type: "warning", ...options }),
    error: (options) => sendToast({ type: "error", ...options }),
    danger: (options) => sendToast({ type: "danger", ...options }),
    reset: () => toastStore.set([]),
    subscribe: toastStore.subscribe,
    store: notifierStore
};
exports.notify = {
    info: (options) => sendNotify({ type: "info", ...options }),
    success: (options) => sendNotify({ type: "success", ...options }),
    warning: (options) => sendNotify({ type: "warning", ...options }),
    error: (options) => sendNotify({ type: "error", ...options }),
    danger: (options) => sendNotify({ type: "danger", ...options }),
    reset: () => notifierStore.set([]),
    subscribe: notifierStore.subscribe,
    store: notifierStore
};
