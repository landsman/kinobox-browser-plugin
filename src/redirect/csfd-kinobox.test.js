import { test, expect } from '@jest/globals';
import { redirectFromCsfdToKinobox } from './csfd-kinobox';

test('movie - redirect from csfd to kinobox', () => {
  expect(
    redirectFromCsfdToKinobox('https://www.csfd.cz/film/9499-matrix/')
  ).toBe('https://www.kinobox.cz/vyhledavani?term=matrix&target=films');

  expect(
    redirectFromCsfdToKinobox(
      'https://www.csfd.cz/film/2294-vykoupeni-z-veznice-shawshank/'
    )
  ).toBe(
    'https://www.kinobox.cz/vyhledavani?term=vykoupeni%20z%20veznice%20shawshank&target=films'
  );

  expect(
    redirectFromCsfdToKinobox(
      'https://www.csfd.cz/film/2982-prelet-nad-kukaccim-hnizdem/'
    )
  ).toBe(
    'https://www.kinobox.cz/vyhledavani?term=prelet%20nad%20kukaccim%20hnizdem&target=films'
  );

  expect(
    redirectFromCsfdToKinobox(
      'https://www.csfd.cz/film/2667-klub-rvacu/prehled/'
    )
  ).toBe('https://www.kinobox.cz/vyhledavani?term=klub%20rvacu&target=films');
});

test('search', () => {
  expect(
    redirectFromCsfdToKinobox('https://www.csfd.cz/podrobne-vyhledavani/')
  ).toBe('https://www.kinobox.cz/vyhledavani?term=&target=films');

  expect(
    redirectFromCsfdToKinobox('https://www.csfd.cz/hledat/?q=matrix')
  ).toBe('https://www.kinobox.cz/vyhledavani?term=matrix&target=films');
});

test('vod', () => {
  expect(redirectFromCsfdToKinobox('https://www.csfd.cz/vod/')).toBe(
    'https://www.kinobox.cz/vod'
  );

  expect(redirectFromCsfdToKinobox('https://www.csfd.cz/vod/netflix/')).toBe(
    'https://www.kinobox.cz/vod'
  );

  // todo: add support for genre - https://www.kinobox.cz/zebricky/nejlepsi/filmy/akcni?expandProviders
  expect(
    redirectFromCsfdToKinobox('https://www.csfd.cz/vod/netflix/?genre%5B%5D=1')
  ).toBe('https://www.kinobox.cz/vod');
});

test('charts', () => {
  expect(
    redirectFromCsfdToKinobox('https://www.csfd.cz/zebricky/filmy/nejlepsi/')
  ).toBe('https://www.kinobox.cz/zebricky');

  // todo: add page for series
  expect(
    redirectFromCsfdToKinobox('https://www.csfd.cz/zebricky/serialy/nejlepsi/')
  ).toBe('https://www.kinobox.cz/zebricky');
});

test('cinema redirect', () => {
  expect(redirectFromCsfdToKinobox('https://www.csfd.cz/kino/1-praha/')).toBe(
    'https://www.kinobox.cz/kino_program/hraji-v-kinech'
  );

  expect(redirectFromCsfdToKinobox('https://www.csfd.cz/kino/premiery/')).toBe(
    'https://www.kinobox.cz/kino_program/hraji-v-kinech'
  );

  expect(
    redirectFromCsfdToKinobox('https://www.csfd.cz/kino/prehled/?year=2024')
  ).toBe('https://www.kinobox.cz/kino_program/hraji-v-kinech');
});

test('television redirect', () => {
  expect(redirectFromCsfdToKinobox('https://www.csfd.cz/televize/')).toBe(
    'https://www.kinobox.cz/tvprogram/tipy'
  );

  expect(
    redirectFromCsfdToKinobox('https://www.csfd.cz/televize/program/')
  ).toBe('https://www.kinobox.cz/tvprogram/tipy');
});

test('news', () => {
  expect(redirectFromCsfdToKinobox('https://www.csfd.cz/novinky/')).toBe(
    'https://www.kinobox.cz/clanky'
  );
});

test('unsupported pages', () => {
  expect(redirectFromCsfdToKinobox('https://www.csfd.cz/diskuze/')).toBe(null);
});
