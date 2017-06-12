export const userLogin = (username) => {
  console.log('user logged in ', username);
  return {
    type: 'fetchedUsername',
    username,
  };
};
