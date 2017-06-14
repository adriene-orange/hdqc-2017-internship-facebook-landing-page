
import React, { Component, PropTypes } from 'react';
import shortid from 'shortid';
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as selectInterest from '../actions/selectInterest';
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
    if (event.target.innerHTML !== this.props.selectInterest) {
      this.props.dispatch(selectInterest.updateInterest(event.target.innerHTML));
    }
  }

  render() {
    const mapArray = this.props.userData.interests.map(interest => (
      <li className="list-item" key={shortid.generate()}>
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
      <ul className="list-items">
        { mapArray }
      </ul>
    );
  }
}

ListItems.propTypes = {
  userData: PropTypes.objectOf(PropTypes.array).isRequired,
  dispatch: PropTypes.func.isRequired,
  selectInterest: PropTypes.string.isRequired,
};

ListItems.defaultProps = {
  values: [],
};

function mapStateToProps(state) {
  return {
    selectInterest: state.selectedInterest.subject,
  };
}

export default connect(mapStateToProps)(ListItems);
