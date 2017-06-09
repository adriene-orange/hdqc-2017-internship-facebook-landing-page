import React, { Component, PropTypes } from 'react';
import { apiCall } from '../services/apiCall';
import Detail from './detail';

class DetailWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: {},
      test: '',
    };
  }

  componentWillReceiveProps(nextProps) {
    return apiCall(nextProps.value).then(result => this.setState({ result }));
  }
  render() {
    const { value, store } = this.props;
    const { result } = this.state;
    return (
      <Detail
        value={value}
        store={store}
        result={result}
      />
    );
  }
}

DetailWrapper.propTypes = {
  value: PropTypes.string.isRequired,
  store: PropTypes.arrayOf(PropTypes.objects).isRequired,
};

export default DetailWrapper;
