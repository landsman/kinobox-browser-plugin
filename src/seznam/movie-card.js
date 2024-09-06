import { findSiblingElement } from './utils.js';
import { buildMovieButton } from './movie-button.js';
import { searchMovieOnKinobox } from '../kinobox/kinobox.js';

/**
 * These buttons help us find the promoted movie in the source code.
 */
const movieCardTabs = ['Informace', 'Obsazení', 'Diskuse', 'Videa'];

/**
 * Get DOM location of the movie tabs.
 *
 * @param html {Element}
 * @returns {Element|null}
 */
export function findMovieTabs(html) {
  // Find the first button that matches one of the movieTabs
  const button = Array.from(html.querySelectorAll('button')).find(element => {
    const text = element.textContent.trim();
    return movieCardTabs.includes(text);
  });

  if (button === undefined) {
    return null;
  }

  return button.parentElement;
}

/**
 *
 * @param state {State}
 * @returns {string}
 */
function buildRedirect(state) {
  const term = state.getMovieNameWithYear();
  return searchMovieOnKinobox(term);
}

/**
 * Add Kinobox tab -> redirect to kinobox movie page.
 *
 * @param state {State}
 * @param buttonParent {Element}
 */
export async function injectKinoboxButton(state, buttonParent) {
  // the first button have active styles, we need some other
  const notActiveButtonWrapper = findSiblingElement(buttonParent);
  if (notActiveButtonWrapper === null) {
    console.error('button not found!');
    return;
  }

  const btn = notActiveButtonWrapper.getElementsByTagName('button');
  if (btn.length === 0) {
    console.error('button not found!');
    return;
  }

  // add to the end
  const kinoboxButton = buildMovieButton(
    buildRedirect(state),
    notActiveButtonWrapper.className,
    btn[0].className
  );
  notActiveButtonWrapper.parentElement.appendChild(kinoboxButton);

  // change state
  state.setAddedKinoboxButton(true);
}

/**
 * Find the movie Name in the page.
 *
 * @param movieCardHtml {Element}
 * @returns {Element|null}
 */
export function findMovieName(movieCardHtml) {
  const coverAndHeadline = movieCardHtml.firstElementChild;

  /* parse movie name */
  const headlineWrapper = coverAndHeadline.lastElementChild;
  const headlineData = headlineWrapper.firstElementChild;
  const h3 = headlineData.getElementsByTagName('h3');
  if (h3 === null) {
    console.error('Headline not found!');
    return null;
  } else {
    return h3[0].textContent;
  }
}

/**
 * Parse Release Year of the movie from Headline data.
 *
 * @param movieCardHtml {Element}
 * @returns {{rating: number, year: number}}
 */
function findYearAndRating(movieCardHtml) {
  const coverAndHeadline = movieCardHtml.firstElementChild;

  /* parse movie name */
  const headlineWrapper = coverAndHeadline.lastElementChild;
  const headlineData = headlineWrapper.firstElementChild;

  const wrapper = headlineData.lastElementChild;
  const ratingText = wrapper.firstElementChild.textContent.trim();
  const rating = parseInt(ratingText.match(/\d+/)[0]);

  const yearAndCategory = wrapper.lastElementChild.textContent.trim();
  const year = parseInt(yearAndCategory.match(/\d+/)[0]);

  return {
    rating,
    year,
  };
}

/**
 * Find the Movie Image in the page.
 *
 * @param movieCardHtml
 * @returns {Element}
 */
export function findMovieCover(movieCardHtml) {
  const coverAndHeadline = movieCardHtml.firstElementChild;
  return coverAndHeadline.firstElementChild;
}

/**
 * Parse most important data and set state.
 *
 * @param state {State}
 * @param buttonParent {Element}
 */
export async function initMovieData(state, buttonParent) {
  const movieCard = buttonParent.parentElement.parentElement.parentElement;

  /* parse name */
  const name = findMovieName(movieCard);
  state.setMovieName(name);

  /* parse year and rating */
  const { year, rating } = findYearAndRating(movieCard);
  state.setMovieYear(year);
  state.setMovieRating(rating);

  /* add link to cover */
  const image = findMovieCover(movieCard);
  image['style'].cursor = 'pointer';
  image['title'] = 'Ukázat na Kinobox';
  image.onclick = () => {
    window.location.href = buildRedirect(state);
  };
}
