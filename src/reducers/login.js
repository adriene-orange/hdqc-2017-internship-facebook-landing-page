export default (state = {}, payload = {}) => {
  switch (payload.type) {
    case 'login':
      return [...state, payload.user, payload.error];
    default:
      return state;
  }
};
