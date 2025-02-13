import './style.css'
import { testCsfdApi } from './playground.js';

const csfdForm = 'csfd';

// render content
document.querySelector('#app').innerHTML = `
  <div>
    <h1>Playground</h1>
    <form id="${csfdForm}">
      <textarea name="url" cols="150" rows="1">https://www.csfd.cz/film/1625-harry-potter-a-vezen-z-azkabanu/prehled/</textarea>
      <button type="submit">Odeslat</button>
    </form>
  </div>
`
// init actions
testCsfdApi(document.querySelector(`#${csfdForm}`))
