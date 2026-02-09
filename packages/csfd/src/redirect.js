import { getMovieNameAndYear } from './movie';
import { parseSearch } from './search';
import { parseTelevision } from './tv';
import { parseCinema } from './cinema';
import { parseCharts } from './charts';
import { parseVOD } from './vod';
import { parseNews } from './news';
import {
  articlesOnKinobox,
  chartsOnKinobox,
  cinemaOnKinobox,
  searchMovieOnKinobox,
  televisionOnKinobox,
  vodOnKinobox,
} from '@kinobox/kinobox';

/**
 * From current URL of the movie on www.csfd.cz redirect me to www.kinobox.cz alternative.
 *
 * @param currentUrl {string} window.location.href
 * @param html {Element|undefined}
 * @returns {string|null}
 */
export function redirectFromCsfdToKinobox(currentUrl, html) {
  /* movie */
  const csfdMovieData = getMovieNameAndYear(currentUrl, html);
  if (csfdMovieData !== null) {
    return searchMovieOnKinobox(csfdMovieData.name, csfdMovieData.year);
  }

  /* search */
  const csfdSearch = parseSearch(currentUrl);
  if (csfdSearch !== null) {
    return searchMovieOnKinobox(csfdSearch);
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
