import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import constants from '../constants/constants';

class ControlPanel extends Component {

  static propTypes = {
    status: PropTypes.string.isRequired,
    isPlayEnabled: PropTypes.bool.isRequired,
  };

  handlePlay = () => {
    console.log('play');
  }

  handleContinue = () => {
    console.log('continue');
  }

  render() {
    const {
      status,
      isPlayEnabled,
    } = this.props;

    return (
      <div className="control-panel">
        <Button
          buttonClassName={status === constants.READY ? 'green' : 'orange'}
          buttonOnClick={status === constants.READY ? this.handlePlay : this.handleContinue}
          buttonLabel={status === constants.READY ? 'Play' : 'Continue'}
          buttonIsDisabled={!isPlayEnabled}
        />
      </div>
    );
  }
}

export default ControlPanel;
