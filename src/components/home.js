import React, { Component, PropTypes } from 'react';
import './home.css';
import List from './list';
import DetailWrapper from './detailWrapper';
import Header from './header';
import Footer from './footer';
import * as userData from '../data/store';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
    this.getValue = this.getValue.bind(this);
  }
  getValue(event) {
    this.setState({
      value: event.target.innerHTML,
    });
  }
  render() {
    return (
      <div>
        <Header username={this.props.username} fetchUsername={this.props.fetchUsername} />
        <div className="home">
          <List func={this.getValue} userData={userData} />
          <DetailWrapper value={this.state.value} userData={userData} />
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
