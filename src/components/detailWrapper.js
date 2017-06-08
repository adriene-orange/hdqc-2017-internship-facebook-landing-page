import React, { Component, PropTypes } from 'react';
import { apiCall } from '../services/apiCall';
import Detail from './detail';

class DetailWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: {},
    };
  }

  componentWillReceiveProps(nextProps) {
    console.log('this is the wrapper prevprops', this.props.value, 'next', nextProps.value);
    apiCall(nextProps.value).then(
      (result) => {
        console.log('result', result);
        this.setState({
          result,
        });
      },
      (error) => {
        console.log(error);
      },
    );
  }

  render() {
    const { value, store } = this.props;
    return (
      <Detail value={value} store={store} result={this.state.result} />
    );
  }
}

DetailWrapper.propTypes = {
  value: PropTypes.string.isRequired,
  store: PropTypes.arrayOf(PropTypes.objects).isRequired,
};

export default DetailWrapper;
