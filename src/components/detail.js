import React, { PropTypes } from 'react';
import './detail.css';
// import DetailWrapper from './detailWrapper';

const Detail = (props) => {
  const { value, store, result, imageLink } = props;
  const matchedValue = store.interests.filter(item => value === item.subject);
  const imageUrl = imageLink.pages[Object.keys(imageLink.pages)[0]].imageinfo[0].url;

  if (matchedValue.length === 1
        && Object.keys(result).length >= 1
        && Object.keys(imageLink).length >= 1
      ) {
    return (
      <div className="detail">
        <p className="detail-header" >
          {value}
        </p>
        <div style={{ height: '200px', width: 'auto', background: `url(${imageUrl})`, backgroundSize: 'contain' }} />
        https://upload.wikimedia.org/wikipedia/commons/9/95/Aboriginal_hollow_log_tomb.jpg
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
  imageLink: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default Detail;
