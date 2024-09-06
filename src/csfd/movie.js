import { parseNumber } from '../utils';

/**
 * Get movie name from the page HTML.
 *
 * @param html {Element}
 * @returns {{year: number|null, name: string|null}|null}
 */
function parseMovieNameFromPage(html) {
  const wrapper = html.getElementsByClassName('main-movie-profile');
  if (wrapper.length === 0) {
    console.debug("Movie wrapper not found!");
    return null;
  }

  const movieName = wrapper[0].getElementsByClassName('film-header-name');
  if (movieName.length === 0) {
    console.debug("Movie name not found! #2");
    return null;
  }

  const name = movieName[0].getElementsByTagName('h1')[0];
  const nameText = name.textContent.trim();

  const yearWrapper = wrapper[0].getElementsByClassName('film-info-content');
  const origin = yearWrapper[0].getElementsByClassName('origin');
  const year = origin[0].getElementsByTagName('span')[0];
  const cleanYear = parseNumber(year.textContent);

  return {
    name: nameText,
    year: cleanYear,
  }
}

/**
 * Parse CSFD movie title from the URL slug
 *
 * @param currentUrl
 * @returns {string|null}
 */
function parseTermFromURL(currentUrl) {
  // Extract the movie part (e.g., '2667-klub-rvacu') from the URL
  let urlParts = currentUrl.split('/');

  // The movie part should be in the form of 'ID-title'
  let moviePart = urlParts[4];

  // Skip the ID and get the title part
  let movieTitleWithHyphen = moviePart.split('-').slice(1).join('-');

  // Replace hyphens with spaces
  return movieTitleWithHyphen.replace(/-/g, ' ');
}

/**
 * Parse data to get name and year of the movie.
 *
 * @param currentUrl {string}
 * @returns {{year: string, name: string|null}}
 */
export function getMovieNameAndYear(currentUrl) {
  const check = currentUrl.includes('/film/');
  if (!check) {
    return null;
  }

  const formUrl = parseTermFromURL(currentUrl);

  let result = {
    name: formUrl || 'Matrix',
    year: '',
  };

  const fromPage = parseMovieNameFromPage(document);
  if (fromPage === null) {
    return result;
  }

  result = Object.assign(result, fromPage);

  return result;
}
