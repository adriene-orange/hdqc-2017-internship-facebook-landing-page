import { addUser } from '../services/users';

// types
export const INITIATE_SIGNUP = 'INITIATE_SIGNUP';
export const SIGNUP_APPROVED = 'SIGNUP_APPROVED';
export const SIGNUP_REJECTED = 'SIGNUP_REJECTED';

// actions
export const initiateSignup = () => ({ type: INITIATE_SIGNUP });

export const signUpApproved = data => ({ type: SIGNUP_APPROVED, signedUp: data });

export const signUpRejected = error =>
({ type: SIGNUP_REJECTED, signedUp: false, signUpError: error });


export const handleSignup = inputs => (dispatch) => {
  dispatch(initiateSignup());
  const { username, password, firstname,
    lastname, gender, birthmonth, birthday, birthyear } = inputs;
  return addUser(username, password, firstname,
    lastname, gender, birthmonth, birthday, birthyear)
    .then(
      (data) => {
        dispatch(signUpApproved(data));
      },
      (error) => {
        dispatch(signUpRejected(error));
      },
    );
};
