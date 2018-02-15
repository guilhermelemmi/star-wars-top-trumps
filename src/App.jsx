import React from 'react';
import './App.css';
import catamaran from './images/Catamaran.jpg';

const App = () => (
  <div className="star-wars-top-trumps">
    <div className="score-panel">
      <div className="player-scores">
        <div><span className="player-score">11</span></div>
        <div><span className="player-score">28</span></div>
      </div>
    </div>
    <div className="game-panel">
      <div className="game-panel-result">Draw</div>
      <div className="card-container winner">
        <div className="card-result">Winner</div>
        <div className="card">
          <div className="card-header">
            <h3>Raddaugh Gnasp fluttercraft</h3>
            <div className="card-additional-info">
              <div>Model: Raddaugh Gnasp fluttercraft</div>
              <div>Manufacturer: Appazanna Engineering Works</div>
            </div>
          </div>
          <div className="card-image-container">
            <img src={catamaran} className="card-image" alt="" />
          </div>
          <div className="card-feature-list">
            <div className="card-feature-row">
              <span className="card-feature-label">Cost:</span>
              <span className="card-feature-value">14750</span>
            </div>
            <div className="card-feature-row">
              <span className="card-feature-label">Length:</span>
              <span className="card-feature-value">7</span>
            </div>
            <div className="card-feature-row">
              <span className="card-feature-label">Speed:</span>
              <span className="card-feature-value">310</span>
            </div>
            <div className="card-feature-row">
              <span className="card-feature-label">Crew:</span>
              <span className="card-feature-value">2</span>
            </div>
            <div className="card-feature-row">
              <span className="card-feature-label">Passengers:</span>
              <span className="card-feature-value">0</span>
            </div>
            <div className="card-feature-row">
              <span className="card-feature-label">Cargo Capacity:</span>
              <span className="card-feature-value">20</span>
            </div>
          </div>
        </div>
        <div className="selected-feature">Choose a feature</div>
      </div>
      <div className="game-panel-x">x</div>
      <div className="card-container">
        <div className="card closed" />
      </div>
    </div>
    <div className="control-panel">
      <a className="btn orange">Play</a>
    </div>
  </div>
);

export default App;
