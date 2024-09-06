import {improvePageResult} from "../seznam/search";
import {State} from "../seznam/state";

console.debug('---------------- KINOBOX-SEZNAM ----------------')

const state = new State();
improvePageResult(state);

console.debug('---------------- /KINOBOX-SEZNAM ----------------')