import { test, expect } from '@jest/globals';
import {redirectFromCsfdToKinobox} from "./csfd-kinobox";

test('movie - redirect from csfd to kinobox', () => {
    expect(
        redirectFromCsfdToKinobox('https://www.csfd.cz/film/2667-klub-rvacu/prehled/')
    ).toBe('https://www.kinobox.cz/vyhledavani?term=klub%20rvacu');

    expect(
        redirectFromCsfdToKinobox('https://www.csfd.cz/novinky/')
    ).toBe(null);

    expect(
        redirectFromCsfdToKinobox('https://www.csfd.cz/televize/')
    ).toBe('https://www.kinobox.cz/tvprogram/tipy');
});