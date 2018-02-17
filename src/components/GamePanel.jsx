import React from 'react';
import CardContainer from './CardContainer';

const GamePanel = () => (
  <div className="game-panel">
    <div className="game-panel-result">Draw</div>
    <CardContainer />
    <div className="game-panel-x">x</div>
    <CardContainer />
  </div>
);

export default GamePanel;
