export default (state = {}, payload) => {
  switch (payload.type) {
    case 'fetchedUsername':
      return { ...state, username: payload.username };
    default:
      return state;
  }
};
