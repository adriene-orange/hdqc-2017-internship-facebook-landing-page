export default (state = {}, payload) => {
  // console.log('hello', state, payload.subject);
  switch (payload.type) {
    case 'selectedInterest':
      return { ...state, subject: payload.subject };
    default:
      return state;
  }
};
