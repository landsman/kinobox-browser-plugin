const domain = 'https://www.kinobox.cz';
const getPage = {
    search: (term) => domain + `/vyhledavani?term=${term}`
}

/**
 * Get URL for searching in movies on Kinobox
 *
 * @param query {string}
 * @returns {string}
 */
export function searchMovieOnKinobox(query) {
    const term = encodeURIComponent(query)
    return getPage.search(term)
}