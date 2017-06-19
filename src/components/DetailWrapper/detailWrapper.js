import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Detail from '../Detail/detail';
import * as wikiCall from '../../actions/wikiCall';
import '../LoadingSpinner/loadingSpinner.css';


class DetailWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.value !== nextProps.value) {
      return this.props.dispatch(wikiCall.getWikiData(nextProps.value));
    }
    return this.props.result;
  }

  render() {
    const { value, userData, result, data, loading } = this.props;
    if (loading) {
      return (
        <div className="detail">
          <div className="detail-header" >
            {value}
          </div>
          <div className="loader">
            Loading...
          </div>
        </div>
      );
    } else if (Object.keys(result).length >= 1 && Object.keys(data).length >= 1) {
      const detailText = data.text['*'];
      const imageUrl = result.pages[Object.keys(result.pages)[0]].thumbnail.source;
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
        <p> Please select an interest </p>
      </div>
    );
  }
}

DetailWrapper.propTypes = {
  value: PropTypes.string,
  userData: PropTypes.objectOf(PropTypes.array),
  result: PropTypes.objectOf(PropTypes.Object),
  data: PropTypes.objectOf(PropTypes.object),
  dispatch: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

DetailWrapper.defaultProps = {
  value: '',
  userData: {},
  result: {},
  data: {},
};

function mapStateToProps(state) {
  return {
    result: state.wikiCall.result,
    data: state.wikiCall.data,
    loading: state.wikiCall.loading,
  };
}

export default connect(mapStateToProps)(DetailWrapper);
