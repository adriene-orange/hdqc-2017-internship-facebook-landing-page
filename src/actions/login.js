import { getUserByUsernameAndPassword } from '../services/users';

export const loginUser = (username, password) => {
  console.log('adding username, password:', username, password);
  const loginAttempt = getUserByUsernameAndPassword(username, password).then(
    data => ({ type: login, user: data.user }),
    error => ({ type: login, error }),
  );
  return loginAttempt;
};
