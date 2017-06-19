import React, { PropTypes } from 'react';
import './detail.css';

const Detail = (props) => {
  const { value, userData, detailText } = props;
  const matchedValue = userData.interests.filter(item => value === item.subject);
  if (matchedValue.length === 1) {
    return (
      <div className="detail">
        <p className="detail-header" >
          {value}
        </p>
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
  detailText: PropTypes.string,
};

Detail.defaultProps = {
  value: '',
  userData: {},
  imageUrl: '',
  detailText: '',
};

export default Detail;
