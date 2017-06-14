import React, { Component, PropTypes } from 'react';
// import { apiCall } from '../services/apiCall';
import { connect } from 'react-redux';
import Detail from './detail';
import * as callWiki from '../actions/callWiki';

class DetailWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillReceiveProps(nextProps) {
    // return apiCall(nextProps.value).then(result => this.setState({ result }));
    if (this.props.value !== nextProps.value) {
      return this.props.dispatch(callWiki.getWikiData(nextProps.value));
    }
    return this.props.result;
  }

  render() {
    const { value, userData, result } = this.props;
    if (Object.keys(result).length >= 1) {
      return (
        <Detail
          value={value}
          userData={userData}
          result={result}
        />
      );
    }
    return (
      <div className="detail">
        <div className="detail-header" >
          {value}
        </div>
        <p> Please select an interest from the list </p>
      </div>
    );
  }
}

DetailWrapper.propTypes = {
  value: PropTypes.string.isRequired,
  userData: PropTypes.objectOf(PropTypes.array).isRequired,
  result: PropTypes.objectOf(PropTypes.Object).isRequired,
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    result: state.callWiki.result,
  };
}

export default connect(mapStateToProps)(DetailWrapper);
