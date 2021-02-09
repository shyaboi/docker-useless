import React, { Component } from 'react';

class Toggle extends Component {
  state = {
    switch1: true,
  }
  handleSwitchChange = nr => () => {
    let switchNumber = `switch${nr}`;
    this.setState({
      [switchNumber]: !this.state[switchNumber]
    });
  }

  render() {
    return (
      <div className='custom-control custom-switch'>
        <input
          type='checkbox'
          className='custom-control-input'
          id='customSwitches'
          checked={this.state.switch1}
          onChange={this.handleSwitchChange(1)}
          readOnly
        />
        <label className='custom-control-label' htmlFor='customSwitches'>
        Enable Wrap
        </label>
      </div>
    );
  }
}

export default Toggle;