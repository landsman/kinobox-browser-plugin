/**
 * Parse CSFD Cinema page from URL
 *
 * @param currentUrl {string}
 * @returns {boolean}
 */
export function parseCinema(currentUrl) {
  return currentUrl.includes('/kino/');
}
