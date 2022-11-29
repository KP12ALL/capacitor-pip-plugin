'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@capacitor/core');

const Pip = core.registerPlugin('Pip', {
    web: () => Promise.resolve().then(function () { return web; }).then(m => new m.PipWeb()),
});

class PipWeb extends core.WebPlugin {
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

var web = /*#__PURE__*/Object.freeze({
    __proto__: null,
    PipWeb: PipWeb
});

exports.Pip = Pip;
//# sourceMappingURL=plugin.cjs.js.map
