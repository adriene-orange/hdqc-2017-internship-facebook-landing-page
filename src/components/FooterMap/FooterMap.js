import React, { PropTypes } from 'react';
import shortid from 'shortid';

const FooterMap = (props) => {
  const mapArray = props.values.map(item => (
    <li key={shortid.generate()}>{item}</li>
  ));

  return (
    <ul>
      { mapArray }
    </ul>
  );
};

FooterMap.propTypes = {
  values: PropTypes.arrayOf(PropTypes.string).isRequired,
};

FooterMap.defaultProps = {
  values: [],
};

export default FooterMap;
