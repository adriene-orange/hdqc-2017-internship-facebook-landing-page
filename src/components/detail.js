import React, { PropTypes } from 'react';
import './detail.css';

const Detail = (props) => {
  const value = props.value;
  // console.log(props);

  return (
    <div className="detail">
      <p>You picked {value}</p>
    </div>
  );
};

Detail.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Detail;
