export function fetchCountries(name) {
  const URL = `https://restcountries.com/v3.1/name/${name}`;
  return fetch(URL, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(response => {
      if (!response.ok) throw new Error('There was an error');
      return response.json();
    })
    .then(body => {
      return body;
    })
    .catch(error => console.error(error));
}