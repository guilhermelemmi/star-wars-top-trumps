import React from 'react';
import PropTypes from 'prop-types';
import CardContainer from './CardContainer';
import {
  STATUS_READY,
  STATUS_DONE,
  PLAYER_1,
  PLAYER_2,
  DRAW,
} from './constants/constants';

const GamePanel = (props) => {
  const {
    player1Card,
    player2Card,
    playersTurn,
    status,
    handleFeatureSelection,
    selectedFeature,
    lastWinner,
  } = props;

  return (
    <div className="game-panel">
      { lastWinner === DRAW && (
        <div className="game-panel-result">Draw</div>
      )}
      <CardContainer
        card={player1Card}
        isClosed={status === STATUS_READY && playersTurn !== PLAYER_1}
        handleFeatureSelection={handleFeatureSelection}
        selectedFeature={selectedFeature}
        status={status}
        isWinner={status === STATUS_DONE && lastWinner === PLAYER_1}
      />
      <div className="game-panel-x">x</div>
      <CardContainer 
        card={player2Card}
        isClosed={status === STATUS_READY && playersTurn !== PLAYER_2}
        handleFeatureSelection={handleFeatureSelection}
        selectedFeature={selectedFeature}
        status={status}
        isWinner={status === STATUS_DONE && lastWinner === PLAYER_2}
      />
    </div>
  );
}

GamePanel.propTypes = {
  status: PropTypes.string.isRequired,
  player1Card: PropTypes.object.isRequired,
  player2Card: PropTypes.object.isRequired,
  playersTurn: PropTypes.string.isRequired,
  lastWinner: PropTypes.string,
  selectedFeature: PropTypes.string,
  handleFeatureSelection: PropTypes.func.isRequired,
}

export default GamePanel;
