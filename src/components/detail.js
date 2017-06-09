import React, { PropTypes } from 'react';
import './detail.css';
// import DetailWrapper from './detailWrapper';

const Detail = (props) => {
  const { value, store, result } = props;
  const matchedValue = store.interests.filter(item => value === item.subject);

  if (matchedValue.length === 1
        && Object.keys(result).length >= 1
      ) {
    const imageUrl = result.pages[Object.keys(result.pages)[0]].thumbnail.source;
    return (
      <div className="detail">
        <p className="detail-header" >
          {value}
        </p>
        <figure className="detail-image">
          <img src={imageUrl} alt={value} style={{ maxHeight: '100px' }} />
          <figcaption />
        </figure>
      </div>
    );
  }
  return (
    <div className="detail">
      <div className="detail-header" >
        {value}
      </div>
      <p> Please select an interest from the list </p>
    </div>
  );
};

Detail.propTypes = {
  value: PropTypes.string.isRequired,
  store: PropTypes.arrayOf(PropTypes.object).isRequired,
  result: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default Detail;
