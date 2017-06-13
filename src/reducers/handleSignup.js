export default (state = { signUpError: '', signedUp: false }, payload) => {
  switch (payload.type) {
    case 'SIGNUP_APPROVED':
      return { ...state, signedUp: payload.signedUp };
    case 'SIGNUP_REJECTED':
      return { ...state, signUpError: payload.signUpError, signedUp: false };
    default:
      return state;
  }
};
