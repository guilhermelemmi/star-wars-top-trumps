import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import { STATUS_READY } from '../constants/constants';

const ControlPanel = (props) => { 
  const {
    status,
    isPlayEnabled,
    handleButtonClick,
  } = props;

  return (
    <div className="control-panel">
      <Button
        buttonClassName={status === STATUS_READY ? 'green' : 'orange'}
        buttonOnClick={handleButtonClick}
        buttonLabel={status === STATUS_READY ? 'Play' : 'Continue'}
        buttonIsDisabled={!isPlayEnabled}
      />
    </div>
  );
}

ControlPanel.propTypes = {
  status: PropTypes.string.isRequired,
  isPlayEnabled: PropTypes.bool.isRequired,
  handleButtonClick: PropTypes.func.isRequired,
};

export default ControlPanel;
