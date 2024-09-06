import {parseTermFromURL} from "../csfd/movie";
import {parseTelevision} from "../csfd/tv";
import {cinemaOnKinobox, searchMovieOnKinobox, televisionOnKinobox} from "../kinobox/kinobox";
import {parseCinema} from "../csfd/cinema";

/**
 * From current URL of the movie on www.csfd.cz redirect me to www.kinobox.cz alternative.
 *
 * @param currentUrl {string} window.location.href
 * @returns {string|null}
 */
export function redirectFromCsfdToKinobox(currentUrl) {
    /* movie */
    const csfdMovieTerm = parseTermFromURL(currentUrl);

    if (csfdMovieTerm !== null) {
        return searchMovieOnKinobox(csfdMovieTerm);
    }

    /* tv */
    const csfdTelevision = parseTelevision(currentUrl);
    if (csfdTelevision) {
        return televisionOnKinobox();
    }

    /* cinema */
    const csfdCinema = parseCinema(currentUrl);
    if (csfdCinema) {
        return cinemaOnKinobox();
    }

    /* unsupported path */
    return null;
}

