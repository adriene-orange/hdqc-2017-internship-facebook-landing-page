import React, { Component } from 'react';
import './home.css';
import List from './list';
import Detail from './detail';

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
    return (
      <div className="home">
        <List func={this.getValue} />
        <Detail value={this.state.value} />
      </div>
    );
  }
}


export default Home;
