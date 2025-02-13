import { testCSFD } from '../../src/kinobox/kinobox.js';

const movie = '1625';

export function testCsfdApi(element) {
  element.addEventListener('submit', async (event) => {
    event.preventDefault();
    console.log(event);

    const api = await testCSFD(movie);
    console.log(api);

    //redirectFromCsfdToKinobox()
  })
}
