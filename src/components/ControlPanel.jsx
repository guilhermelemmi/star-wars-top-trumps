import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import { STATUS_READY, STATUS_OVER } from '../constants/constants';

const ControlPanel = (props) => { 
  const {
    status,
    isPlayEnabled,
    handleButtonClick,
  } = props;

  let buttonLabel;
  switch(status) {
    case STATUS_READY:
      buttonLabel = 'Play';
      break;
    case STATUS_OVER:
      buttonLabel = 'New Game';
      break;
    default:
      buttonLabel = 'Continue';
  }

  return (
    <div className="control-panel">
      <Button
        buttonClassName={status === STATUS_READY ? 'green' : 'orange'}
        buttonOnClick={handleButtonClick}
        buttonLabel={buttonLabel}
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
