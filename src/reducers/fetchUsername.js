export default (state = {}, payload) => {
  // console.log('fetchUsername reducer', state, payload.username);
  switch (payload.username) {
    case 'fetchedUsername':
      return { ...state, username: payload.username };
    default:
      return state;
  }
};
