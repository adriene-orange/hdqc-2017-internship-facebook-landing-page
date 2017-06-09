require('es6-promise').polyfill();
require('isomorphic-fetch');

const wikiUrl = 'https://en.wikipedia.org/w/api.php';
const options = { headers: { 'Access-Control-Allow-Origin': '*' } };
options.origin = 'https://en.wikipedia.org';
// const options = { mode: 'no-cors' };

// export const imageCall = (file) => {
//   const apiUrl = `${commonsUrl}?action=query&origin=*&titles=${file}&prop
// =imageinfo&iiprop=url&format=json`;
//   return fetch(apiUrl)
//     .then((response) => {
//       if (response.status >= 400) {
//         throw new Error('Bad response from server');
//       }
//       return response.json();
//     })
//     .then(data => data.query);
// };

export const apiCall = (title) => {
  console.log('api call title is ', title);
  const apiUrl = `${wikiUrl}?action=query&origin=*&titles=${title}&prop=pageimages&imlimit=1&format=json&pithumbsize=500`;
  return fetch(apiUrl)
    .then((response) => {
      if (response.status >= 400) {
        throw new Error('Bad response from server');
      }
      return response.json();
    })
    .then(data => data.query);
      // .pages[Object.keys(data.query.pages)[0]]
      //   .images[0].title).replace(/ /g, '_'));
};
