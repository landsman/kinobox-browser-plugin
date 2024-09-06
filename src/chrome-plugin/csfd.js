import {redirectFromCsfdToKinobox} from "../redirect/csfd-kinobox";

/* redirect from csfd movie to kinobox search */
const movieRedirect = redirectFromCsfdToKinobox(window.location.href);
if (movieRedirect !== null) {
    window.location.href = movieRedirect;
}
