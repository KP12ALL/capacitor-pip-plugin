import {registerPlugin} from '@capacitor/core';

const Pip = registerPlugin('Pip', {
    web: () => import('./web').then(m => new m.PipWeb()),
});
export * from './definitions';
export { Pip };
//# sourceMappingURL=index.js.map
