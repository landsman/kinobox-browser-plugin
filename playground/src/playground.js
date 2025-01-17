import { redirectFromCsfdToKinobox } from '../../src/redirect/csfd-kinobox.js';

export function testCsfdApi(element) {
  element.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(event);
    redirectFromCsfdToKinobox('https://www.csfd.cz/film/1625-harry-potter-a-vezen-z-azkabanu/prehled/')
  })
}
