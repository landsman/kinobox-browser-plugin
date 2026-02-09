/**
 * Find sibling of the Element.
 *
 * @param el {Element}
 * @returns {Element|null}
 */
export function findSiblingElement(el) {
  if (el.previousElementSibling) {
    return el.previousElementSibling;
  }

  if (el.nextElementSibling) {
    return el.nextElementSibling;
  }

  return null;
}
