export {ExtberryExtension, SendMessageEvent} from './declarations';
import {ExtberryPlatform} from './platform';

export {
    ExtberryPlatform
}

const extberryPlatformInstance = new ExtberryPlatform();

let mapped = false;
export function mapExtberryToGlobalChrome() {
    if (mapped) return;

    if (!window) {
        return;
    }

    const extension = extberryPlatformInstance.getExtension();
    Object.keys(extension).forEach((key: string) => {
        extension[key] && (
            window.chrome[key] = extension[key]
        );
    });

    mapped = true;
}

export default extberryPlatformInstance;