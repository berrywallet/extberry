import {ExtberryExtension} from './declarations'

const browserApiList: string[] = [
    'alarms',
    'bookmarks',
    'browserAction',
    'commands',
    'contextMenus',
    'cookies',
    'downloads',
    'events',
    'extension',
    'extensionTypes',
    'history',
    'i18n',
    'idle',
    'notifications',
    'pageAction',
    'runtime',
    'storage',
    'tabs',
    'webNavigation',
    'webRequest',
    'windows',
];

export class ExtensionProxy implements ExtberryExtension {

    alarms?: typeof chrome.alarms;
    bookmarks?: typeof chrome.bookmarks;
    browserAction?: typeof chrome.browserAction;
    commands?: typeof chrome.commands;
    cookies?: typeof chrome.cookies;
    idle?: typeof chrome.idle;
    contextMenus?: typeof chrome.contextMenus;
    downloads?: typeof chrome.downloads;
    extension?: typeof chrome.extension;
    history?: typeof chrome.history;
    i18n?: typeof chrome.i18n;
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

    constructor() {
        this.initBaseApi();

        try {
            if (window.browser && window.browser.runtime) {
                this.runtime = window.browser.runtime
            }
        } catch (e) {
        }

        try {
            if (window.browser && window.browser.browserAction) {
                this.browserAction = window.browser.browserAction
            }
        } catch (e) {
        }
    }

    initBaseApi(): void {
        browserApiList.forEach((api) => {
            this[api] = null;

            try {
                if (chrome[api]) {
                    this[api] = chrome[api]
                }
            } catch (e) {
            }

            try {
                if (window[api]) {
                    this[api] = window[api]
                }
            } catch (e) {
            }

            try {
                if (window.browser[api]) {
                    this[api] = window.browser[api]
                }
            } catch (e) {
            }

            try {
                this.api = window.browser.extension[api]
            } catch (e) {
            }
        });
    }
}
