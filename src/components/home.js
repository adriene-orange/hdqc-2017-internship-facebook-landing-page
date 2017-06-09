import React, { Component, PropTypes } from 'react';
import './home.css';
import List from './list';
import Detail from './detail';
import Header from './header';
import Footer from './footer';
import * as store from '../data/store';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
    this.getValue = this.getValue.bind(this);
  }
  getValue(event) {
    console.log(event.target.innerHTML);
    this.setState({
      value: event.target.innerHTML,
    });
  }
  render() {
    console.log(store);
    return (
      <div>
        <Header username={this.props.username} fetchUsername={this.props.fetchUsername} />
        <div className="home">
          <List func={this.getValue} store={store} />
          <Detail value={this.state.value} store={store} />
        </div>
        <Footer />
      </div>
    );
  }
}

Home.propTypes = {
  username: PropTypes.string.isRequired,
  fetchUsername: PropTypes.func.isRequired,
};

export default Home;
