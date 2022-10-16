const BASE_URL = 'https://restcountries.com/v3.1';
const searchBy = '/name';
const options = '?fields=name,capital,population,flags,languages';

export function fetchCountries(name) {
  return fetch(`${BASE_URL}${searchBy}/${name}${options}`).then(responce => {
    if (!responce.ok)
      throw new Error('Oops, there is no country with that name');
    return responce.json();
  });
}
