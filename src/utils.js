/**
 * Get number from text.
 *
 * @param text {string}
 * @returns {number}
 */
export function parseNumber(text) {
  return parseInt(text.match(/\d+/)[0]);
}

/**
 * Remove words that we don't want to keep in search query.
 * This word is added by Seznam.cz.
 *
 * @param text {string}
 * @returns {string}
 */
export function removeUselessWords(text) {
  const wordList = ['(film)', 'film']
  const regex = /\(film,\s\d{4}\)/g

  // Remove specific patterns like "(film, 1997)"
  text = text.replace(regex, '').trim()

  // Remove words from wordList and join them back into a string
  text = text
    .split(' ')
    .filter(word => !wordList.includes(word.toLowerCase()))
    .join(' ')

  // Remove any extra spaces
  return text.replace(/\s{2,}/g, ' ')
}