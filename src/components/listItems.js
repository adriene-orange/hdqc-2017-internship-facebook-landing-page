import React, { Component, PropTypes } from 'react';
import shortid from 'shortid';
<<<<<<< HEAD
import * as store from '../data/store';
import './listItems.css';
=======
>>>>>>> e21480f3726a6f5aee11587ff27090d173155dc7

class ListItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: [],
      selected: '',
    };
    this.selectHandler = this.selectHandler.bind(this);
  }

  selectHandler(event) {
    this.setState({ selected: event.target.innerHTML });
    // console.log(this.state.selected);
    this.props.func(event);
  }
  render() {
<<<<<<< HEAD
    const mapArray = store.interests.map(item => (
      <li key={shortid.generate()} className="list-items">
=======
    const mapArray = this.props.store.interests.map(interest => (
      <li style={{ maxHeight: '50px', width: 'auto' }} key={shortid.generate()}>
>>>>>>> e21480f3726a6f5aee11587ff27090d173155dc7
        <a
          role="button"
          tabIndex="-1"
          onClick={this.selectHandler}
        >
          {interest.subject}
        </a>
      </li>
    ));
    return (
      <ul>
        { mapArray }
      </ul>
    );
  }
}

ListItems.propTypes = {
  // values: PropTypes.arrayOf(PropTypes.string).isRequired,
  func: PropTypes.func.isRequired,
  store: PropTypes.arrayOf(PropTypes.object).isRequired,
};

ListItems.defaultProps = {
  values: [],
};

export default ListItems;
