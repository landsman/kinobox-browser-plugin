export class State {

    /** @type {Boolean} */
    movieInSearchResults = false;

    /** @type {string|null|undefined} */
    movieName = undefined;

    /** @param value {string} */
    setMovieName(value) {
        this.movieName = value;
    }

    /** @type {string|null|undefined} */
    movieYear= undefined;

    /** @param value {string} */
    setMovieYear(value) {
        this.movieYear = value;
    }

    /** @type {Boolean} */
    addedKinoboxButton = false;

    /** @param result {Boolean} */
    setAddedKinoboxButton(result) {
        this.addedKinoboxButton = result;
    }

    constructor() {}
}