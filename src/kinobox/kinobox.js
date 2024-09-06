/**
 * Production domain
 */
const domain = 'https://www.kinobox.cz';

/**
 * URLs catalog
 */
const getPage = {
  search: term => domain + `/vyhledavani?term=${term}`,
  charts: domain + '/zebricky',
  vod: domain + '/vod',
  television: domain + '/tvprogram/tipy',
  cinema: domain + '/kino_program/hraji-v-kinech',
  articles: domain + '/clanky',
};

/**
 * Get URL for searching in movies on Kinobox.
 *
 * @param name {string}
 * @param year {string|undefined|null}
 * @returns {string}
 */
export function searchMovieOnKinobox(name, year = undefined) {
  let result = name || '';

  if (year !== undefined || year !== '') {
    result += ' ' + year;
  }

  const term = encodeURIComponent(result);
  return getPage.search(term);
}

/**
 * Redirect to Charts page on Kinobox.
 *
 * @returns {string}
 */
export function chartsOnKinobox() {
  return getPage.charts;
}

/**
 * Redirect to VOD page on Kinobox.
 *
 * @returns {string}
 */
export function vodOnKinobox() {
  return getPage.vod;
}

/**
 * Redirect to Television page on Kinobox.
 *
 * @returns {string}
 */
export function televisionOnKinobox() {
  return getPage.television;
}

/**
 * Redirect to Cinema page on Kinobox.
 *
 * @returns {string}
 */
export function cinemaOnKinobox() {
  return getPage.cinema;
}

/**
 * Redirect to Articles page on Kinobox.
 *
 * @returns {string}
 */
export function articlesOnKinobox() {
  return getPage.articles;
}
