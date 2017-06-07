import React, { Component } from 'react';
import './home.css';
import List from './list';
import Detail from './detail';
import Header from './header';
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
        <Header styleSheet="home-header" />
        <div className="home">
          <List func={this.getValue} store={store} />
          <Detail value={this.state.value} store={store} />
        </div>
      </div>
    );
  }
}


export default Home;
