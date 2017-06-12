import { addUser } from '../services/users';

const INITIATE_SIGNUP = 'INITIATE_SIGNUP';
const SIGNUP_APPROVED = 'SIGNUP_APPROVED';
const SIGNUP_REJECTED = 'SIGNUP_REJECTED';

const initiateSignup = () => ({ type: INITIATE_SIGNUP });

const signUpApproved = data => ({ type: SIGNUP_APPROVED, signedUp: data });

const signUpRejected = error => ({ type: SIGNUP_REJECTED, signedUp: false, signUpError: error });


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
