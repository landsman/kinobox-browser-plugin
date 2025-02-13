import { test, expect } from '@jest/globals';
import { getMovieDetails } from './movie';

test('test parsing id form the url', () => {
  expect(
    getMovieDetails( 'https://www.csfd.cz/film/2982-prelet-nad-kukaccim-hnizdem/', null)
  ).toStrictEqual({"id": 2982, "name": "prelet nad kukaccim hnizdem", "year": ""});
});

