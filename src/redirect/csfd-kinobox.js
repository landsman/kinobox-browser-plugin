import { getMovieNameAndYear } from '../csfd/movie';
import { parseSearch } from '../csfd/search';
import { parseTelevision } from '../csfd/tv';
import { parseCinema } from '../csfd/cinema';
import { parseCharts } from '../csfd/charts';
import { parseVOD } from '../csfd/vod';
import { parseNews } from '../csfd/news';
import {
  articlesOnKinobox,
  chartsOnKinobox,
  cinemaOnKinobox,
  searchMovieOnKinobox,
  televisionOnKinobox,
  vodOnKinobox,
} from '../kinobox/kinobox';

/**
 * From current URL of the movie on www.csfd.cz redirect me to www.kinobox.cz alternative.
 *
 * @param currentUrl {string} window.location.href
 * @returns {string|null}
 */
export function redirectFromCsfdToKinobox(currentUrl) {
  /* movie */
  const csfdMovieData = getMovieNameAndYear(currentUrl);

  console.log("movie data!", csfdMovieData);

  if (csfdMovieData !== null) {
    return searchMovieOnKinobox(csfdMovieData.name, csfdMovieData.year);
  }

  /* search */
  const csfdSearch = parseSearch(currentUrl);
  if (csfdSearch !== null) {
    return searchMovieOnKinobox(csfdSearch, undefined);
  }

  /* charts */
  const csfdCharts = parseCharts(currentUrl);
  if (csfdCharts) {
    return chartsOnKinobox();
  }

  /* vod */
  const csfdVOD = parseVOD(currentUrl);
  if (csfdVOD) {
    return vodOnKinobox();
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

  /* articles / news */
  const csfdNews = parseNews(currentUrl);
  if (csfdNews) {
    return articlesOnKinobox();
  }

  /* unsupported path */
  return null;
}
