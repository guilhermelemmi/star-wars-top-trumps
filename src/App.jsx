import React, { Component } from 'react';
import './App.css';
import vehicles from './data/vehicles.json';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
    this.handleNext = this.handleNext.bind(this);
  }

  handleNext() {
    this.setState({ index: this.state.index + 1 });
  }

  render() {
    const {
      name,
      model,
      manufacturer,
      image,
      costInCredits,
      totalLength,
      maxAtmospheringSpeed,
      crew,
      passengers,
      cargoCapacity,
    } = vehicles.vehicles[this.state.index];

    return (
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
                <h3>{name}</h3>
                <div className="card-additional-info">
                  <div>Model: {model}</div>
                  <div>Manufacturer: {manufacturer}</div>
                </div>
              </div>
              <div className="card-image-container">
                <img
                  src={
                    `${process.env.PUBLIC_URL}/images/${image}` //eslint-disable-line
                  }
                  className="card-image"
                  alt=""
                />
              </div>
              <div className="card-feature-list">
                <div className="card-feature-row">
                  <span className="card-feature-label">Cost:</span>
                  <span className="card-feature-value">{costInCredits}</span>
                </div>
                <div className="card-feature-row">
                  <span className="card-feature-label">Length:</span>
                  <span className="card-feature-value">{totalLength}</span>
                </div>
                <div className="card-feature-row">
                  <span className="card-feature-label">Speed:</span>
                  <span className="card-feature-value">{maxAtmospheringSpeed}</span>
                </div>
                <div className="card-feature-row">
                  <span className="card-feature-label">Crew:</span>
                  <span className="card-feature-value">{crew}</span>
                </div>
                <div className="card-feature-row">
                  <span className="card-feature-label">Passengers:</span>
                  <span className="card-feature-value">{passengers}</span>
                </div>
                <div className="card-feature-row">
                  <span className="card-feature-label">Cargo Capacity:</span>
                  <span className="card-feature-value">{cargoCapacity}</span>
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
          <button
            className="btn orange"
            onClick={this.handleNext}
          >
            Play
          </button>
        </div>
      </div>
    );
  }
}

export default App;
