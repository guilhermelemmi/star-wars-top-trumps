import React from 'react';
import PropTypes from 'prop-types';
import CardContainer from './CardContainer';
import {
  STATUS_READY,
  STATUS_DONE,
  STATUS_OVER,
  PLAYER_1,
  PLAYER_2,
} from '../constants/constants';

const GamePanel = (props) => {
  const {
    player1Card,
    player2Card,
    status,
    handleFeatureSelection,
    selectedFeature,
    lastWinner,
    isDraw,
  } = props;

  return (
    <div className="game-panel">
      { status === STATUS_OVER && (
        <div className="game-panel-result">Game Over</div>
      )}
      { isDraw && (
        <div className="game-panel-result">Draw</div>
      )}
      <CardContainer
        card={player1Card}
        isClosed={status === STATUS_READY && lastWinner === PLAYER_2}
        handleFeatureSelection={handleFeatureSelection}
        selectedFeature={selectedFeature}
        status={status}
        isWinner={status !== STATUS_READY && lastWinner === PLAYER_1 && !isDraw}
      />
      <div className="game-panel-x">x</div>
      <CardContainer 
        card={player2Card}
        isClosed={status === STATUS_READY && lastWinner !== PLAYER_2}
        handleFeatureSelection={handleFeatureSelection}
        selectedFeature={selectedFeature}
        status={status}
        isWinner={status !== STATUS_READY && lastWinner === PLAYER_2 && !isDraw}
      />
    </div>
  );
}

GamePanel.propTypes = {
  status: PropTypes.string.isRequired,
  player1Card: PropTypes.object.isRequired,
  player2Card: PropTypes.object.isRequired,
  lastWinner: PropTypes.string,
  selectedFeature: PropTypes.string,
  handleFeatureSelection: PropTypes.func.isRequired,
}

export default GamePanel;
