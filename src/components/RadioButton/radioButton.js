import React, { Component, PropTypes } from 'react';
import Label from '../Label/label';

class Radio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: '',
    };
    this.radioHandler = this.radioHandler.bind(this);
  }

  radioHandler(event) {
    console.log(event.target.value);
    this.setState({
      selected: event.target.value,
    });
    this.props.handleChange(event);
  }

  render() {
    return (
      <div style={{
        fontSize: '18px',
        display: 'flex',
        marginLeft: '6px' }}
      >
        <RadioButton
          name="gender"
          gender="Female"
          checked={this.state.selected === 'Female'}
          onClick={this.radioHandler}
        />
        <RadioButton
          name="gender"
          gender="Male"
          checked={this.state.selected === 'Male'}
          onClick={this.radioHandler}
        />
      </div>
    );
  }
}

const RadioButton = (props) => {
  const { name, onClick, checked, gender } = props;
  return (
    <div>
      <Label htmlFor={name}>
        <input
          type="radio"
          name={name}
          value={gender}
          onClick={onClick}
          checked={checked}
          style={{ marginRight: '6px' }}
        />
        {gender}
      </Label>
    </div>
  );
};

RadioButton.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
  // handleChange: PropTypes.func.isRequired,
  gender: PropTypes.string.isRequired,
};

Radio.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default Radio;
