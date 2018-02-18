import React from 'react';
import PropTypes from 'prop-types';
import CardContainer from './CardContainer';
import constants from '../constants/constants';

const GamePanel = (props) => {
  const {
    player1Card,
    player2Card,
    playersTurn,
    status,
  } = props;

  return (
    <div className="game-panel">
      <div className="game-panel-result">Draw</div>
      <CardContainer
        card={player1Card}
        isClosed={status === constants.READY && playersTurn !== constants.PLAYER_1}
      />
      <div className="game-panel-x">x</div>
      <CardContainer 
        card={player2Card}
        isClosed={status === constants.READY && playersTurn !== constants.PLAYER_2}
      />
    </div>
  );
}

GamePanel.propTypes = {
  status: PropTypes.string.isRequired,
  player1Card: PropTypes.object.isRequired,
  player2Card: PropTypes.object.isRequired,
  playersTurn: PropTypes.string.isRequired,
}

export default GamePanel;
