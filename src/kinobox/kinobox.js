/**
 * Production domain
 */
const domain = 'https://www.kinobox.cz';

/**
 * URLs catalog
 */
const getPage = {
    search: (term) => domain + `/vyhledavani?term=${term}`,
    television: domain + '/tvprogram/tipy',
    cinema: domain + '/kino_program/hraji-v-kinech'
}

/**
 * Get URL for searching in movies on Kinobox.
 *
 * @param query {string}
 * @returns {string}
 */
export function searchMovieOnKinobox(query) {
    const term = encodeURIComponent(query)
    return getPage.search(term)
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
 * Redirect to Cinema page in Kinobox.
 *
 * @returns {string}
 */
export function cinemaOnKinobox() {
    return getPage.cinema;
}
