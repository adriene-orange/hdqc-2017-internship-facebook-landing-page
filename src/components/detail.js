import React, { PropTypes } from 'react';
import './detail.css';

const Detail = (props) => {
  const { value, store } = props;
  const matchedValue = store.interests.filter(item => value === item.subject);


  if (matchedValue.length === 1) {
    const { image, ref } = matchedValue[0];
    return (
      <div className="detail">
        <div className="detail-header" >
          {value}
        </div>
        <dl>
          <dt><img src={image} alt={value} style={{ maxHeight: '100px' }} /></dt>
        </dl>
        <a href={ref} rel="noopener noreferrer" target="_blank">More Info</a>
      </div>
    );
  }
  return (
    <div className="detail">
      <div className="detail-header" >
        {value}
      </div>
    </div>
  );
};

Detail.propTypes = {
  value: PropTypes.string.isRequired,
  store: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Detail;
