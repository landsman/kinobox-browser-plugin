import {findMovieTabs, injectKinoboxButton} from "./movie-card";

/**
 * Parse HTML and find the buttons related to promoted Movie.
 *
 * @param state {State}
 */
export function improvePageResult(state) {
    const contentElement = document.getElementById('contentWrapper');

    const buttonParent = findMovieTabs(contentElement);
    injectKinoboxButton(state, buttonParent);
}

