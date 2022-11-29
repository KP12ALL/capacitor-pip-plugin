import {WebPlugin} from '@capacitor/core';

export class PipWeb extends WebPlugin {
    async enable() {
        const message = { value: 'Not implemented on web' };
        console.log('PIP', message);
        return message;
    }
    async disable() {
        const message = { value: 'Not implemented on web' };
        console.log('PIP', message);
        return message;
    }
}
//# sourceMappingURL=web.js.map
