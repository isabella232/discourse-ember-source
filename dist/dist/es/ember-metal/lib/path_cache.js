import { Cache } from 'ember-utils';
const firstDotIndexCache = new Cache(1000, key => key.indexOf('.'));
export function isPath(path) {
    return typeof path === 'string' && firstDotIndexCache.get(path) !== -1;
}
