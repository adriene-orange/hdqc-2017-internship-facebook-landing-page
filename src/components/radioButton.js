import React, { Component, PropTypes } from 'react';
import Label from './label';

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
      <div style={{
        fontSize: '18px',
        display: 'flex',
        marginLeft: '6px' }}
      >
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

const RadioButton = (props) => {
  const { name, onClick, checked } = props;
  return (
    <div>
      <Label htmlFor={name}>
        <input type="radio" name={name} value={name} onClick={onClick} checked={checked} style={{ marginRight: '6px' }} />
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

export default Radio;
