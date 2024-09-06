import {redirectFromCsfdToKinobox} from "../redirect/csfd-kinobox";

export function initCsfd() {
    if (!window.location.href.includes("csfd.cz")) {
        return;
    }

    console.debug('---------------- KINOBOX-CSFD ----------------')

    /* redirect from csfd movie to kinobox search */
    const movieRedirect = redirectFromCsfdToKinobox(window.location.href);
    if (movieRedirect !== null) {
        window.location.href = movieRedirect;
    }

    console.debug('---------------- /KINOBOX-CSFD ----------------')
}
