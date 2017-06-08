import React, { Component, PropTypes } from 'react';
import './home.css';
import List from './list';
import DetailWrapper from './detailWrapper';
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
    console.log('Home value', this.state.value);
    return (
      <div>
        <Header auth={this.props.auth} appLogin={this.props.appLogin} />
        <div className="home">
          <List func={this.getValue} store={store} />
          <DetailWrapper value={this.state.value} store={store} />
        </div>
        <Footer />
      </div>
    );
  }
}

Home.propTypes = {
  auth: PropTypes.bool.isRequired,
  appLogin: PropTypes.func.isRequired,
};

export default Home;
