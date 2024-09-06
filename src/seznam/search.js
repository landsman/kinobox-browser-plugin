import {findMovieTabs, injectKinoboxButton} from "./movie-card";

/**
 * Parse HTML and find the buttons related to promoted Movie.
 *
 * @param state {State}
 */
export function improvePageResult(state) {
    const contentElement = document.getElementById('contentWrapper');

    /* parser logic based on buttons */
    const buttonParent = findMovieTabs(contentElement);
    state.setMovieInSearchResults(buttonParent !== null);
    if (buttonParent === null) {
        return;
    }

    injectKinoboxButton(state, buttonParent);

    /* test */
    console.log(buttonParent.parentElement.parentElement.parentElement.textContent.trim());
}

