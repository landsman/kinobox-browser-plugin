import { redirectFromCsfdToKinobox } from '../redirect/csfd-kinobox';

export function initCsfd() {
  if (!window.location.href.includes('csfd.cz')) {
    return;
  }

  const movieRedirect = redirectFromCsfdToKinobox(window.location.href, document);
  if (movieRedirect !== null) {
    window.location.href = movieRedirect;
  }
}
