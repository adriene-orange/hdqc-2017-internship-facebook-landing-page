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
    // console.log('this is the wrapper prevprops', this.props.value, 'next', nextProps.value);
    // apiCall(nextProps.value)
    //   .then(
    //     (result) => {
    //       // console.log('result', result);
    //       this.setState({
    //         result,
    //       });
    //       this.imageApiMethod(result);
    //     },
    //     (error) => {
    //       console.log(error);
    //     },
    //   );
    return Promise.resolve(apiCall(nextProps.value)).then((value) => {
      console.log('value----', value);
      this.setState({ result: value });
      // return imageCall(value).then(secondValue => this.setState({ imageLink: secondValue }));
    });
  }
  // imageApiMethod(result) {
  //   // console.log('this.state', this.state);
  //   imageCall((result.pages[Object.keys(result.pages)[0]]
  //     .images[0].title).replace(/ /g, '_'))
  //     .then(
  //       (data) => {
  //         // console.log('data', data);
  //         this.setState({
  //           imageLink: data,
  //         });
  //       },
  //       (error) => {
  //         console.log(error);
  //       },
  //     );
  // }

  render() {
    // console.log('this is the other one', this.state.result);
    const { value, store } = this.props;
    const { result } = this.state;
    // console.log(this.state.result);
    if (Object.keys(result).length >= 1) {
      // console.log(this.state.result.pages);
      return (
        <Detail
          value={value}
          store={store}
          result={result}
        />
      );
    }
    return (
      <p>Select an interest</p>
    );
  }
}

DetailWrapper.propTypes = {
  value: PropTypes.string.isRequired,
  store: PropTypes.arrayOf(PropTypes.objects).isRequired,
};

export default DetailWrapper;
