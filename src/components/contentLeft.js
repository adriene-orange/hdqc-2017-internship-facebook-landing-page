import React from 'react';
import './contentLeft.css';

import FeatureDescription from './featureDescription';

const ContentLeft = () => (
  <div className="contentLeft">
    <div className="left-header">
      <h1>Connect with friends and the world around you on Facebook.</h1>
    </div>
    <FeatureDescription
      imageSource="https://scontent-ort2-1.xx.fbcdn.net/v/t39.2365-6/851565_602269956474188_918638970_n.png?oh=cc4965eaabc9cfb0f83f8f653ef6e0a3&oe=59E88DF5"
      text="See photos and updates"
      subtext="from friends in News Feed."
    />
    <FeatureDescription
      imageSource="https://scontent-ort2-1.xx.fbcdn.net/v/t39.2365-6/851585_216271631855613_2121533625_n.png?oh=05792f1748a4587d53823ee1f6cdf426&oe=599FF820"
      text="Share what&#39;s new"
      subtext="in your life and on your Timeline."
    />
    <FeatureDescription
      imageSource="https://scontent-ort2-1.xx.fbcdn.net/v/t39.2365-6/851558_160351450817973_1678868765_n.png?oh=f40b48f9fd7b648f70a28f90f9409afd&oe=59A8CED8"
      text="Find more"
      subtext="of what you&#39;re looking for with Facebook Search."
    />
  </div>
);

export default ContentLeft;
