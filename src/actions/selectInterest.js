// import { getUserByUsernameAndPassword } from '../services/users';

export const updateInterest = (subject) => {
  console.log('selectedInterest ', subject);
  return {
    type: 'selectedInterest',
    subject,
  };
};
