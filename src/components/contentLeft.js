import React from 'react';
import './contentLeft.css';

const ContentLeft = () => (
  <div>
    <h1>Connect with friends and the world around you on Facebook.</h1>
    <div className="row">
      <img src="https://scontent-ort2-1.xx.fbcdn.net/v/t39.2365-6/851565_602269956474188_918638970_n.png?oh=cc4965eaabc9cfb0f83f8f653ef6e0a3&oe=59E88DF5" alt="feed-icon" />
      <p><span>See photos and updates</span> from friends in News Feed.</p>
    </div>
    <div className="row">
      <img src="https://scontent-ort2-1.xx.fbcdn.net/v/t39.2365-6/851585_216271631855613_2121533625_n.png?oh=05792f1748a4587d53823ee1f6cdf426&oe=599FF820" alt="feed-icon" />
      <p><span>Share what&#39;s new</span> in your life on your Timeline.</p>
    </div>
    <div className="row">
      <img src="https://scontent-ort2-1.xx.fbcdn.net/v/t39.2365-6/851558_160351450817973_1678868765_n.png?oh=f40b48f9fd7b648f70a28f90f9409afd&oe=59A8CED8" alt="feed-icon" />
      <p><span>Find more</span> of what you&#39;re looking for with Facebook Search.</p>
    </div>
  </div>
);

export default ContentLeft;
