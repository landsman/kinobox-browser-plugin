import {findMovieTabs, initMovieData, injectKinoboxButton} from "./movie-card";

/**
 * Parse HTML and find the buttons related to promoted Movie.
 *
 * @param state {State}
 */
export async function improvePageResult(state) {
    const contentElement = document.getElementById('contentWrapper');

    /* parser logic based on buttons */
    const buttonParent = findMovieTabs(contentElement);
    state.setMovieInSearchResults(buttonParent !== null);
    if (buttonParent === null) {
        return;
    }

    await initMovieData(state, buttonParent);
    await injectKinoboxButton(state, buttonParent);
}

