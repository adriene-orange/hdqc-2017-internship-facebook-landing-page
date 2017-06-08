import React, { Component, PropTypes } from 'react';
import shortid from 'shortid';
import * as store from '../data/store';
import './listItems.css';

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
    const mapArray = store.interests.map(item => (
      <li key={shortid.generate()} className="list-items">
        <a
          role="button"
          tabIndex="-1"
          onClick={this.selectHandler}
        >
          {item}
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
};

ListItems.defaultProps = {
  values: [],
};

export default ListItems;
