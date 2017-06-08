import React, { PropTypes } from 'react';
import './detail.css';
// import DetailWrapper from './detailWrapper';

const Detail = (props) => {
  const { value, store, result } = props;
  const matchedValue = store.interests.filter(item => value === item.subject);

  console.log('results', result);

  if (matchedValue.length === 1) {
    // const { image, ref } = matchedValue[0];
    console.log('las;kjfls;akfjsl;kadfjl;');
    return (
      <div className="detail">
        <p className="detail-header" >
          {value}
        </p>
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
  result: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default Detail;
