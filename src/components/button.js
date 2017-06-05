import React, { PropTypes } from 'react';


const Button = (props) => {
  const { containerName, className, type, value } = props;
  return (
    <div className={containerName}>
      <input className={className} type={type} value={value} />
    </div>
  );
};

Button.propTypes = {
  containerName: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
export default Button;
