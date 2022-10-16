function markupList(arr) {
  return arr.reduce(
    (acc, country) =>
      acc +
      `<li style="">
    <img src="${country.flags.png}" alt="flag ${country.name.official}" width="30" />
    <span>${country.name.official}</span>
  </li>`,
    ''
  );
}

function markupCard(arr) {
  return `<img src="${arr.flags.png}" alt="flag ${
    arr.name.official
  }" width="40" style="margin-right: 20px" /><span class="country-name">${
    arr.name.common
  }</span>
      <p>Capital: <span>${arr.capital[0]}</span></p>
      <p>Population: <span>${arr.population}</span></p>
      <p>Languages: <span>${Object.values(arr.languages)}</span></p>`;
}

export default { markupCard, markupList };
