import React, { Component, PropTypes } from 'react';
import shortid from 'shortid';

class ListItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: ['Art', 'Books', 'Cats', 'Dogs', 'Elephants', 'Ferraris', 'Golf', 'Hopscotch', 'Igloos', 'Jalapenos', 'Knights', 'Loosely Tied Knots'],
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
    const mapArray = this.state.values.map(item => (
      <li key={shortid.generate()}>
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
