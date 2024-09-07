import { expect, test } from '@jest/globals';
import { prepareForSearch } from './kinobox';

test('searchMovieOnKinobox', () => {
  expect(
    prepareForSearch('letec film')
  ).toBe('letec');

  expect(
    prepareForSearch('letec (film)')
  ).toBe('letec');

  expect(
    prepareForSearch('matrix film', 1999)
  ).toBe('matrix%201999');

  expect(
    prepareForSearch('matrix (film)', 1999)
  ).toBe('matrix%201999');

  expect(
    prepareForSearch('Hra (film, 1997)', 1999)
  ).toBe('Hra%20%201999');
});