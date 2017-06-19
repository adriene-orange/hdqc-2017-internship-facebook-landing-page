require('es6-promise').polyfill();
require('isomorphic-fetch');

export const wikiUrl = 'https://en.wikipedia.org/w/api.php';
// export const options = { headers: { 'Access-Control-Allow-Origin': '*' } };
// options.origin = 'https://en.wikipedia.org';

export const apiCall = (title) => {
  const apiUrl = `${wikiUrl}?action=query&origin=*&titles=${title}&prop=pageimages&imlimit=1&format=json&pithumbsize=500`;
  return fetch(apiUrl)
    .then((response) => {
      if (response.status >= 400) {
        throw new Error('Bad response from server');
      }
      return response.json();
    })
    .then(data => data.query);
};

export const textApicall = (pageId) => {
  const textUrl = `${wikiUrl}?action=parse&origin=*&format=json&summary=&pageid=${pageId}&section=0&contentmodel=wikitext`;
  return fetch(textUrl)
    .then((response) => {
      if (response.status >= 400) {
        throw new Error('Bad response from server');
      }
      return response.json();
    })
    .then(data => data.parse);
};
