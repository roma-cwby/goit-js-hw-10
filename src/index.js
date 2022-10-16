import './css/styles.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { fetchCountries } from './fetchCountries.js';
import mkp from './markup.js';

const debounce = require('lodash.debounce');

const DEBOUNCE_DELAY = 300;
const input = document.querySelector('input');
const list = document.querySelector('.country-list');
const info = document.querySelector('.country-info');

input.addEventListener('input', debounce(onInput, 300));

function onInput(e) {
  const value = e.target.value.trim();
  if (value !== '')
    fetchCountries(`${value}`)
      .then(responce => {
        if (responce.length > 10)
          return Notify.info(
            'Too many matches found. Please enter a more specific name.'
          );
        responce.length > 1
          ? addMarkup(mkp.markupList(responce), false)
          : addMarkup(mkp.markupCard(responce[0]));
      })
      .catch(err => Notify.failure(err.message));
}

function addMarkup(mkp, card = true) {
  if (card) {
    list.innerHTML = '';
    info.innerHTML = mkp;
    return;
  }
  info.innerHTML = '';
  list.innerHTML = mkp;
}
