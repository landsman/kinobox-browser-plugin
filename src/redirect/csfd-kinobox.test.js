import { test, expect } from '@jest/globals';
import {redirectFromCsfdToKinobox} from "./csfd-kinobox";

test('movie - redirect from csfd to kinobox', () => {
    expect(
        redirectFromCsfdToKinobox('https://www.csfd.cz/film/2667-klub-rvacu/prehled/')
    ).toBe('https://www.kinobox.cz/vyhledavani?term=klub%20rvacu');
});

test('cinema redirect', () => {
    expect(
        redirectFromCsfdToKinobox('https://www.csfd.cz/kino/1-praha/')
    ).toBe('https://www.kinobox.cz/kino_program/hraji-v-kinech');

    expect(
        redirectFromCsfdToKinobox('https://www.csfd.cz/kino/premiery/')
    ).toBe('https://www.kinobox.cz/kino_program/hraji-v-kinech');

    expect(
        redirectFromCsfdToKinobox('https://www.csfd.cz/kino/prehled/?year=2024')
    ).toBe('https://www.kinobox.cz/kino_program/hraji-v-kinech');
});

test('television redirect', () => {
    expect(
        redirectFromCsfdToKinobox('https://www.csfd.cz/televize/')
    ).toBe('https://www.kinobox.cz/tvprogram/tipy');

    expect(
        redirectFromCsfdToKinobox('https://www.csfd.cz/televize/program/')
    ).toBe('https://www.kinobox.cz/tvprogram/tipy');
});

test('unsupported pages', () => {
    expect(
        redirectFromCsfdToKinobox('https://www.csfd.cz/novinky/')
    ).toBe(null);
});