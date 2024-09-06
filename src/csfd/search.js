/**
 * Parse CSFD Search page from URL
 *
 * @param currentUrl {string}
 * @returns {string|null}
 */
export function parseSearch(currentUrl) {
  const check =
    currentUrl.includes('/hledat/') ||
    currentUrl.includes('/podrobne-vyhledavani/');
  if (!check) {
    return null;
  }

  const urlParams = new URL(currentUrl).searchParams;
  const searchQuery = urlParams.get('q');

  if (searchQuery == null || searchQuery === '') {
    return '';
  }

  return searchQuery;
}
