import React from 'react';
import PropTypes from 'prop-types';

const ScorePanel = ({ player1Score, player2Score }) => (
  <div className="score-panel">
    <div className="player-scores">
      <div><span className="player-score">{player1Score}</span></div>
      <div><span className="player-score">{player2Score}</span></div>
    </div>
  </div>
);

ScorePanel.propTypes = {
  player1Score: PropTypes.number.isRequired,
  player2Score: PropTypes.number.isRequired,
};

export default ScorePanel;
