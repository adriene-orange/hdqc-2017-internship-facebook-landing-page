import React, { PropTypes } from 'react';

const Label = (props) => {
  const {
    htmlFor,
    ...otherProps
  } = props;

  return (
    <label htmlFor={htmlFor} {...otherProps} />
  );
};

Label.propTypes = {
  htmlFor: PropTypes.string.isRequired,
};

export default Label;
