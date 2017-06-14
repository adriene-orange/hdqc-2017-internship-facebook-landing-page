import React, { Component, PropTypes } from 'react';
// import { apiCall } from '../services/apiCall';
import { connect } from 'react-redux';
import Detail from './detail';
import * as wikiCall from '../actions/wikiCall';

class DetailWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentWillReceiveProps(nextProps) {
    // return apiCall(nextProps.value).then(result => this.setState({ result }));
    if (this.props.value !== nextProps.value) {
      console.log('check for props', nextProps.value);
      return this.props.dispatch(wikiCall.getWikiData(nextProps.value));
    }
    return nextProps;
  }

  render() {
    const { value, userData, result, data } = this.props;
    if (Object.keys(result).length >= 1 && Object.keys(data).length >= 1) {
      const detailText = data.text['*'];
      const imageUrl = result.pages[Object.keys(result.pages)[0]].thumbnail.source;
      // console.log('detailWrapper data -- ', data.text['*']);
      return (
        <Detail
          value={value}
          userData={userData}
          imageUrl={imageUrl}
          detailText={detailText}
        />
      );
    }
    return (
      <div className="detail">
        <div className="detail-header" >
          {value}
        </div>
        <p> Detail wrapper failed to render detail </p>
      </div>
    );
  }
}

DetailWrapper.propTypes = {
  value: PropTypes.string,
  userData: PropTypes.objectOf(PropTypes.array).isRequired,
  result: PropTypes.objectOf(PropTypes.Object),
  data: PropTypes.objectOf(PropTypes.object),
  dispatch: PropTypes.func.isRequired,
};

DetailWrapper.defaultProps = {
  value: '',
  result: {},
  data: {},
};

function mapStateToProps(state) {
  return {
    result: state.wikiCall.result,
    data: state.wikiCall.data,
  };
}

export default connect(mapStateToProps)(DetailWrapper);
