import React, { PropTypes } from 'react';

const LoginMessage = (props) => {
  const { message, errorStyle } = props;
  return (
    <p className={errorStyle}>{message}</p>
  );
};

LoginMessage.propTypes = {
  message: PropTypes.string.isRequired,
  errorStyle: PropTypes.string.isRequired,
};

LoginMessage.defaultProps = {
  message: '',
  errorStyle: '',
};
export default LoginMessage;
