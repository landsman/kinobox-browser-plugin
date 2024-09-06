export class State {

    /** @type {Boolean} */
    movieInSearchResults = false;

    /** @param value {boolean} */
    setMovieInSearchResults(value) {
        this.movieInSearchResults = value;
    }

    /** @type {string|null|undefined} */
    movieName = undefined;

    /** @param value {string} */
    setMovieName(value) {
        this.movieName = value;
    }

    /** @type {number|null|undefined} */
    movieYear= undefined;

    /** @param value {number} */
    setMovieYear(value) {
        this.movieYear = value;
    }

    /** @type {number|null|undefined} */
    movieRating = undefined;

    /** @param value {number} */
    setMovieRating(value) {
        this.movieRating = value;
    };

    /**
     * Get me movie name with year
     * @returns {string}
     */
    getMovieNameWithYear() {
        let result = this.movieName || '';

        if (this.movieYear !== undefined) {
            result += ' ' + this.movieYear;
        }

        return result;
    }

    /** @type {Boolean} */
    addedKinoboxButton = false;

    /** @param result {Boolean} */
    setAddedKinoboxButton(result) {
        this.addedKinoboxButton = result;
    }

    constructor() {}
}