import React, { Component, PropTypes } from 'react';

// function getInitialState() {
//   return {
//     selectedOption: 'option1',
//   };
// }

class Radio extends Component {
  constructor() {
    super();
    this.state = {
      female: false,
      male: false,
    };
    this.radioHandler = this.radioHandler.bind(this);
  }

  radioHandler(event) {
    console.log(event.target.name);
    const name = event.target.name;
    if (name === 'Female') {
      this.setState({ female: true, male: false });
    } else if (name === 'Male') {
      this.setState({ female: false, male: true });
    }
  }

  render() {
    return (
      <div>
        <RadioButton
          name="Female"
          checked={this.state.female}
          onClick={event => this.radioHandler(event)}
        />
        <RadioButton
          name="Male"
          checked={this.state.male}
          onClick={event => this.radioHandler(event)}
        />
      </div>
    );
  }
}

// let radioState = '';

const Label = (props) => {
  const {
    htmlFor,
    ...otherProps
  } = props;

  return (
    <label htmlFor={htmlFor} {...otherProps} />
  );
};

const RadioButton = (props) => {
  const { name, onClick, checked } = props;
  if (checked) {
    return (
      <div>
        <Label htmlFor={name}>
          <input type="radio" name={name} value={name} onClick={onClick} checked />
          {name}
        </Label>
      </div>
    );
  } else if (!checked) {
    return (
      <div>
        <Label htmlFor={name}>
          <input type="radio" name={name} value={name} onClick={onClick} />
          {name}
        </Label>
      </div>
    );
  }
  return null;
};

RadioButton.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
};

Label.propTypes = {
  htmlFor: PropTypes.string.isRequired,
};

export default Radio;
