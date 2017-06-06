import React, { PropTypes } from 'react';


const Button = (props) => {
  const { containerName, className, type, value } = props;
  return (
    <div className={containerName}>
      <button className={className} type={type}>{value}</button>
    </div>
  );
};

Button.propTypes = {
  containerName: PropTypes.string,
  className: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
};

Button.defaultProps = {
  containerName: '',
  type: '',
  className: '',
  value: '',
};

export default Button;
