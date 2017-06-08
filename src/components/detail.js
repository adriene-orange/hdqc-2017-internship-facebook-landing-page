import React, { PropTypes } from 'react';
import './detail.css';
// import DetailWrapper from './detailWrapper';

const Detail = (props) => {
  const { value, store, result, imageLink } = props;
  const matchedValue = store.interests.filter(item => value === item.subject);

  // console.log('results', result);
  if (matchedValue.length === 1 && Object.keys(result).length >= 1) {
    // const { image, ref } = matchedValue[0];
    // let result;
    // console.log(result);
    // console.log('result..........', result.pages[Object.keys(result.pages)[0]]
      // .images[0].title);
    // const imageFile = (result.pages[Object.keys(result.pages)[0]]
    //   .images[0].title).replace(/ /g, '_');
    const imageUrl = imageLink.query.pages[Object.keys(result.pages)[0]].imageinfo[0].url;
    // console.log(`https://en.wikipedia.org/wiki/${value}#/media/${imageFile}`);
    return (
      <div className="detail">
        <p className="detail-header" >
          {value}
        </p>
        <div style={{ height: '200px', width: 'auto', background: `url(${imageUrl})` }} />
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
