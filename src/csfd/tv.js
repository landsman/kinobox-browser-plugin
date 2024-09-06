/**
 * Parse CSFD Television page from URL
 *
 * @param currentUrl {string}
 * @returns {boolean}
 */
export function parseTelevision(currentUrl) {
    return currentUrl.includes("/televize/");
}