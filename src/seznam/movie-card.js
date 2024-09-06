import {findSiblingElement} from "./utils";
import {buildMovieButton} from "./movie-button";

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
 * Add Kinobox tab -> redirect to kinobox movie page.
 *
 * @param state {State}
 * @param buttonParent {Element}
 */
export function injectKinoboxButton(state, buttonParent) {
    // the first button have active styles, we need some other
    const notActiveButtonWrapper = findSiblingElement(buttonParent);
    if (notActiveButtonWrapper === null) {
        console.error("button not found!");
        return;
    }

    const btn = notActiveButtonWrapper.getElementsByTagName('button');
    if (btn.length === 0) {
        console.error("button not found!");
        return;
    }

    // add to the end
    const kinoboxButton = buildMovieButton(
        'https://www.kinobox.cz', // todo: change
        notActiveButtonWrapper.className,
        btn[0].className
    );
    notActiveButtonWrapper.parentElement.appendChild(kinoboxButton);

    // change state
    state.setAddedKinoboxButton(true)
}
