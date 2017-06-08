require('es6-promise').polyfill();
require('isomorphic-fetch');

const baseUrl = 'https://en.wikipedia.org/w/api.php';
const options = { headers: { 'Access-Control-Allow-Origin': '*' } };
options.origin = 'https://en.wikipedia.org';
// const options = { mode: 'no-cors' };

export const apiCall = (title) => {
  console.log('api call title is ', title);
  const apiUrl = `${baseUrl}?action=query&origin=*&titles=${title}&prop=images&imlimit=20&format=json`;
  return fetch(apiUrl)
    .then((response) => {
      if (response.status >= 400) {
        throw new Error('Bad response from server');
      }
      return response.json();
    })
    .then(data => data.query);
};
// console.log(addAction('Hopscotch'));
