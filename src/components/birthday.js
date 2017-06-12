import React, { PropTypes } from 'react';
import { birthdayCheck, getUserByName } from '../services/users';

const BirthdayBanner = (props) => {
  const { username } = props;
  const birthdayHuh = birthdayCheck(getUserByName(username));

  console.log(birthdayHuh);
  return (
    <div />
  );
};

BirthdayBanner.propTypes = {
  username: PropTypes.string.isRequired,
};

export default BirthdayBanner;
