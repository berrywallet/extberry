declare global {
    export interface Window {
        browser: any;
        chrome: typeof chrome;
    }
}

export declare type SendMessageEvent = (request: any, responseCallback?: (response: any) => void) => void;

export interface ExtberryExtension {
    alarms?: typeof chrome.alarms;
    bookmarks?: typeof chrome.bookmarks;
    browserAction?: typeof chrome.browserAction;
    commands?: typeof chrome.commands;
    contextMenus?: typeof chrome.contextMenus;
    cookies?: typeof chrome.cookies;
    downloads?: typeof chrome.downloads;
    extension?: typeof chrome.extension;
    history?: typeof chrome.history;
    i18n?: typeof chrome.i18n;
    idle?: typeof chrome.idle;
    notifications?: typeof chrome.notifications;
    pageAction?: typeof chrome.pageAction;
    runtime?: typeof chrome.runtime;
    storage?: typeof chrome.storage;
    tabs?: typeof chrome.tabs;
    webNavigation?: typeof chrome.webNavigation;
    webRequest?: typeof chrome.webRequest;
    windows?: typeof chrome.windows;
    api?: any;
    events?: any;
    extensionTypes?: string[];

    initBaseApi(): void;
}