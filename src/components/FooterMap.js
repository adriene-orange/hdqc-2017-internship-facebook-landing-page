import React, { PropTypes } from 'react';

const FooterMap = (props) => {
  const mapArray = props.values.map(item => (
    <li>{item}</li>
  ));

  return (
    <ul>
      { mapArray }
    </ul>
  );
};

FooterMap.propTypes = {
  values: PropTypes.arrayOf.isRequired,
};

export default FooterMap;
