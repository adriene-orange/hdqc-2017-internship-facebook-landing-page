import React, { PropTypes } from 'react';

const LoginMessage = (props) => {
  const a = props.message;
  return (
    <p>{a}</p>
  );
};

LoginMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

LoginMessage.defaultProps = {
  message: '',
};
export default LoginMessage;
