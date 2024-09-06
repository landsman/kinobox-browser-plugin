import {improvePageResult} from "./search";
import {State} from "./state";

export function initSeznam() {
    if (!window.location.href.includes("seznam.cz")) {
        return;
    }

    console.debug('---------------- KINOBOX-SEZNAM ----------------')

    const state = new State();
    improvePageResult(state);

    console.debug('---------------- /KINOBOX-SEZNAM ----------------')
}
