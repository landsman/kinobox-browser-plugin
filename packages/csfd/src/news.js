/**
 * Parse CSFD News page from URL
 *
 * @param currentUrl {string}
 * @returns {boolean}
 */
export function parseNews(currentUrl) {
  return currentUrl.includes('/novinky/');
}
