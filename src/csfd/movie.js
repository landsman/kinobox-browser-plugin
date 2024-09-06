/**
 * Parse CSFD movie title from the URL slug
 *
 * @param currentUrl
 * @returns {string|null}
 */
export function parseTermFromURL(currentUrl) {
  const check = currentUrl.includes('/film/');
  if (!check) {
    return null;
  }

  // Extract the movie part (e.g., '2667-klub-rvacu') from the URL
  let urlParts = currentUrl.split('/');

  // The movie part should be in the form of 'ID-title'
  let moviePart = urlParts[4];

  // Skip the ID and get the title part
  let movieTitleWithHyphen = moviePart.split('-').slice(1).join('-');

  // Replace hyphens with spaces
  return movieTitleWithHyphen.replace(/-/g, ' ');
}
