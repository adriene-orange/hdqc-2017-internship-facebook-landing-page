import React, { PropTypes } from 'react';
import './detail.css';

const Detail = (props) => {
  const { value, store } = props;
  const matchedValue = store.interests.filter(item => value === item.subject);

  if (matchedValue.length === 1) {
    const { image, ref, description } = matchedValue[0];
    return (
      <div className="detail">
        <p className="detail-header" >
          {value}
        </p>
        <figure className="detail-image">
          <img src={image} alt={value} style={{ maxHeight: '100px' }} />
          <figcaption>
            <a href={ref} rel="noopener noreferrer" target="_blank">More Info</a>
          </figcaption>
        </figure>
        <p>{description}</p>
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
