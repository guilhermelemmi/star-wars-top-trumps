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
  DRAW,
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

    let winner = DRAW;
    if (parseInt(feature1, 10) > parseInt(feature2, 10)) {
      winner = PLAYER_1;
    } else if (parseInt(feature1, 10) < parseInt(feature2, 10)) {
      winner = PLAYER_2;
    }

    this.setState({
      status: STATUS_DONE,
      lastWinner: winner,
    });
  }

  handleContinue = (card1, card2) => {
    const {
      deck1,
      deck2,
      lastWinner,
    } = this.state;

    if (lastWinner === DRAW) {
      this.setState({
        deck1: [...deck1.slice(1), ...(lastWinner === PLAYER_1 ? [card1] : [])],
        deck2: [...deck2.slice(1), ...(lastWinner === PLAYER_2 ? [card2] : [])],
        status: STATUS_READY,
        selectedFeature: undefined,
      });
      return;
    }

    this.setState({
      deck1: [...deck1.slice(1), ...(lastWinner === PLAYER_1 ? [card1, card2] : [])],
      deck2: [...deck2.slice(1), ...(lastWinner === PLAYER_2 ? [card1, card2] : [])],
      status: STATUS_READY,
      selectedFeature: undefined,
    });
  }

  render() {
    const {
      deck1,
      deck2,
      status,
      selectedFeature,
      lastWinner,
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
          playersTurn={lastWinner || PLAYER_1}
          selectedFeature={selectedFeature}
          status={status}
          handleFeatureSelection={this.handleFeatureSelection}
          lastWinner={lastWinner}
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
