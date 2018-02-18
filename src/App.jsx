import React, { Component } from 'react';
import ScorePanel from './components/ScorePanel';
import GamePanel from './components/GamePanel';
import ControlPanel from './components/ControlPanel';

import shuffleArray from './utils/shuffleArray';
import vehiclesData from './data/vehicles.json';
import {
  STATUS_READY,
  STATUS_DONE,
  PLAYER_1,
  PLAYER_2,
} from './constants/constants';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    const vehicles = shuffleArray(vehiclesData.vehicles);
    const halfLength = Math.ceil(vehicles.length / 2);

    this.state = {
      status: STATUS_READY,
      lastWinner: undefined,
      deck1: vehicles.slice(0, halfLength),
      deck2: vehicles.slice(halfLength),
      selectedFeature: undefined,
      isDraw: false,
    };
  }

  handleFeatureSelection = (featureKey) => {
    this.setState({
      selectedFeature: featureKey,
    });
  }

  handleButtonClick= () => {
    const card1 = this.state.deck1[0];
    const card2 = this.state.deck2[0];
    if (this.state.status === STATUS_READY) {
      this.handlePlay(card1, card2);
    } else {
      this.handleContinue(card1, card2);
    }
  }

  handlePlay = (card1, card2) => {
    const feature1 = card1[this.state.selectedFeature];
    const feature2 = card2[this.state.selectedFeature];

    const newState = {
      status: STATUS_DONE,
    };

    if (parseInt(feature1, 10) > parseInt(feature2, 10)) {
      newState.lastWinner = PLAYER_1;
    } else if (parseInt(feature1, 10) < parseInt(feature2, 10)) {
      newState.lastWinner = PLAYER_2;
    } else {
      newState.isDraw = true;
    }

    this.setState(newState);
  }

  handleContinue = (card1, card2) => {
    const {
      deck1,
      deck2,
      lastWinner,
      isDraw,
    } = this.state;

    const newState = {
      status: STATUS_READY,
      selectedFeature: undefined,
      isDraw: false,
    };

    if (isDraw) {
      newState.deck1 = [...deck1.slice(1), card1];
      newState.deck2 = [...deck2.slice(1), card2];
    } else {
      newState.deck1 = [...deck1.slice(1), ...(lastWinner === PLAYER_1 ? [card1, card2] : [])];
      newState.deck2 = [...deck2.slice(1), ...(lastWinner === PLAYER_2 ? [card1, card2] : [])];
    }

    this.setState(newState);
  }

  render() {
    const {
      deck1,
      deck2,
      status,
      selectedFeature,
      lastWinner,
      isDraw,
    } = this.state;

    return (
      <div className="star-wars-top-trumps">
        <ScorePanel
          player1Score={deck1.length}
          player2Score={deck2.length}
        />
        <GamePanel
          player1Card={deck1[0]}
          player2Card={deck2[0]}
          selectedFeature={selectedFeature}
          status={status}
          handleFeatureSelection={this.handleFeatureSelection}
          lastWinner={lastWinner}
          isDraw={isDraw}
        />
        <ControlPanel
          status={status}
          isPlayEnabled={!!selectedFeature}
          handleButtonClick={this.handleButtonClick}
        />
      </div>
    );
  }
}

export default App;
