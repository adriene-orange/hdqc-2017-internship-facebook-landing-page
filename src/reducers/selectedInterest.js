export default (state = {}, payload) => {
  switch (payload.type) {
    case 'selectedInterest':
      return { ...state, subject: payload.subject };
    default:
      return state;
  }
};
