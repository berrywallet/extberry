import {ExtensionProxy} from './extension-proxy';

export class ExtberryPlatform {

    protected __extension: ExtensionProxy;

    constructor() {
        this.__extension = new ExtensionProxy();
    }

    getExtension(): ExtensionProxy {
        return this.__extension;
    }

    reload(): void {
        this.runtime.reload();
    }

    openTab(createProperties: chrome.tabs.CreateProperties): Promise<chrome.tabs.Tab> {
        return new Promise<chrome.tabs.Tab>((resolve => {
            this.getExtension().tabs.create(
                createProperties,
                (tab: chrome.tabs.Tab): void => resolve(tab)
            );
        }))
    }

    /**
     * extract Runtime object function
     */
    get runtime(): typeof chrome.runtime {
        return this.getExtension().runtime;
    }

    /**
     * Extract Tabs function
     */
    get tabs(): typeof chrome.tabs {
        return this.getExtension().tabs;
    }

    get notifications(): typeof chrome.notifications {
        return this.getExtension().notifications;
    }

    get manifest(): chrome.runtime.Manifest {
        return this.runtime.getManifest();
    }

    get version(): string {
        return this.manifest.version;
    }
}
