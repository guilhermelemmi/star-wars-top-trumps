import React from 'react';
import './App.css';

const App = () => (
  <div className="star-wars-top-trumps">
    <div className="score-panel">
      <div className="player-scores">
        <div className="player-score">Player Score</div>
        <div className="player-score">Player Score</div>
      </div>
      <div className="result">Result</div>
    </div>
    <div className="game-panel">
      <div className="card-container">
        <div className="card">
          <div className="card-image">Card Image</div>
          <div className="card-feature-list">Card Feature List</div>
        </div>
        <div className="selected-feature">Selected Feature</div>
      </div>
      <div className="game-panel-x">x</div>
      <div className="card-container">
        <div className="card">
          <div className="card-image">Card Image</div>
          <div className="card-feature-list">Card Feature List</div>
        </div>
        <div className="selected-feature">Selected Feature</div>
      </div>
    </div>
    <div className="control-panel">
      <div className="button">Button</div>
    </div>
  </div>
);

export default App;
