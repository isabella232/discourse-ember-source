import { GUID_KEY } from './guid';
import intern from './intern';
const GENERATED_SYMBOLS = [];
export function isInternalSymbol(possibleSymbol) {
    return GENERATED_SYMBOLS.indexOf(possibleSymbol) !== -1;
}
export default function symbol(debugName) {
    // TODO: Investigate using platform symbols, but we do not
    // want to require non-enumerability for this API, which
    // would introduce a large cost.
    let id = GUID_KEY + Math.floor(Math.random() * Date.now());
    let symbol = intern(`__${debugName}${id}__`);
    GENERATED_SYMBOLS.push(symbol);
    return symbol;
}