import type { Optional } from "utility-types";
interface Notifier {
    message: string;
    type: string;
    subMessage?: string;
    icon?: string;
    action?: string;
    unread?: boolean;
}
declare type Toast = Notifier & {
    timeout: number;
};
declare type NotifyOptions = Optional<Toast, "timeout">;
declare type ToastOptions = Omit<NotifyOptions, "type">;
declare type ToastStore = Toast[];
declare type NotifierStore = Notifier[];
export declare const toast: {
    info: (options: ToastOptions) => void;
    success: (options: ToastOptions) => void;
    warning: (options: ToastOptions) => void;
    error: (options: ToastOptions) => void;
    danger: (options: ToastOptions) => void;
    reset: () => void;
    subscribe: (run: (value: ToastStore) => void, invalidate?: ((value?: ToastStore | undefined) => void) | undefined) => () => void;
    store: import("svelte/store").Writable<NotifierStore>;
};
export declare const notify: {
    info: (options: ToastOptions) => void;
    success: (options: ToastOptions) => void;
    warning: (options: ToastOptions) => void;
    error: (options: ToastOptions) => void;
    danger: (options: ToastOptions) => void;
    reset: () => void;
    subscribe: (run: (value: NotifierStore) => void, invalidate?: ((value?: NotifierStore | undefined) => void) | undefined) => () => void;
    store: import("svelte/store").Writable<NotifierStore>;
};
export {};
