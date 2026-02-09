/**
 * Parse CSFD VOD page from URL
 *
 * @param currentUrl {string}
 * @returns {boolean}
 */
export function parseVOD(currentUrl) {
  return currentUrl.includes('/vod/');
}
