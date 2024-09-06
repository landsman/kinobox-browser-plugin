import {parseTermFromURL} from "../csfd/movie";
import {parseTelevision} from "../csfd/tv";
import {parseCinema} from "../csfd/cinema";
import {parseCharts} from "../csfd/charts";
import {chartsOnKinobox, cinemaOnKinobox, searchMovieOnKinobox, televisionOnKinobox} from "../kinobox/kinobox";

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

    /* charts */
    const csfdCharts = parseCharts(currentUrl);
    if (csfdCharts) {
        return chartsOnKinobox();
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

