import React, { PropTypes } from 'react';
import './detail.css';
// import DetailWrapper from './detailWrapper';

const Detail = (props) => {
  const { value, userData, imageUrl, detailText } = props;
  const matchedValue = userData.interests.filter(item => value === item.subject);
  if (matchedValue.length === 1) {
    return (
      <div className="detail">
        <p className="detail-header" >
          {value}
        </p>
        <figure className="detail-image">
          <img src={imageUrl} alt={value} style={{ maxHeight: '500px' }} />
          <figcaption />
        </figure>
        <div dangerouslySetInnerHTML={{ __html: detailText }} />
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
  userData: PropTypes.objectOf(PropTypes.array).isRequired,
  imageUrl: PropTypes.string,
  detailText: PropTypes.string,
};

Detail.defaultProps = {
  value: '',
  userData: {},
  imageUrl: '',
  detailText: '',
};

export default Detail;
