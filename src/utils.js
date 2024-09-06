/**
 * Get number from text.
 *
 * @param text {string}
 * @returns {number}
 */
export function parseNumber(text) {
  return parseInt(text.match(/\d+/)[0]);
}
