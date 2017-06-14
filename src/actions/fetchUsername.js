export const userLogin = (username) => {
  console.log('action user logged in ', username);
  return {
    type: 'fetchedUsername',
    username,
  };
};
