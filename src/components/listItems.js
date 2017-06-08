import React, { Component, PropTypes } from 'react';
import shortid from 'shortid';

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
    const mapArray = this.props.store.interests.map(interest => (
      <li style={{ maxHeight: '50px', width: 'auto' }} key={shortid.generate()}>
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
