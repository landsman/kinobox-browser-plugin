/**
 * Parse CSFD Charts page from URL
 *
 * @param currentUrl {string}
 * @returns {boolean}
 */
export function parseCharts(currentUrl) {
  return currentUrl.includes('/zebricky/');
}
