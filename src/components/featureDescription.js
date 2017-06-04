import React, { PropTypes } from 'react';

const FeatureDescription = (props) => {
  const { imageSource, text, subtext } = props;
  return (
    <div className="row">
      <div className="row-icon">
        <img src={imageSource} alt={text} />
      </div>
      <div className="row-text">
        <p>
          <span className="bold-text">{text}</span>
          <span className="normal-text">{subtext}</span>
        </p>
      </div>
    </div>
  );
};

FeatureDescription.propTypes = {
  imageSource: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  subtext: PropTypes.string.isRequired,
};

export default FeatureDescription;
