import {parseTermFromURL} from "../csfd/movie";
import {searchMovieOnKinobox} from "../kinobox/kinobox";

/**
 * From current URL of the movie on www.csfd.cz redirect me to www.kinobox.cz alternative.
 *
 * @param currentUrl {string} window.location.href
 * @returns {string|null}
 */
export function redirectFromCsfdToKinobox(currentUrl) {
    const csfdMovieTerm = parseTermFromURL(currentUrl);

    if (csfdMovieTerm === null) {
        return null;
    }

    return searchMovieOnKinobox(csfdMovieTerm);
}

