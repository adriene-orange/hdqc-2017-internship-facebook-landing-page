import React, { Component, PropTypes } from 'react';

class Radio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: '',
    };
    this.radioHandler = this.radioHandler.bind(this);
  }

  radioHandler(event) {
    this.setState({
      selected: event.target.name,
    });
  }

  render() {
    return (
      <div>
        <RadioButton
          name="Female"
          checked={this.state.selected === 'Female'}
          onClick={this.radioHandler}
        />
        <RadioButton
          name="Male"
          checked={this.state.selected === 'Male'}
          onClick={this.radioHandler}
        />
      </div>
    );
  }
}

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
  return (
    <div>
      <Label htmlFor={name}>
        <input type="radio" name={name} value={name} onClick={onClick} checked={checked} />
        {name}
      </Label>
    </div>
  );
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
