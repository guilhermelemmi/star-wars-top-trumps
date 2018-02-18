import React, { Component } from 'react';
import ScorePanel from './components/ScorePanel';
import GamePanel from './components/GamePanel';
import ControlPanel from './components/ControlPanel';

import shuffleArray from './utils/shuffleArray';
import constants from './constants/constants';
import vehiclesData from './data/vehicles.json';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    const vehicles = shuffleArray(vehiclesData.vehicles);
    const halfLength = Math.ceil(vehicles.length / 2);

    this.state = {
      status: constants.READY,
      lastWinner: undefined,
      deck1: vehicles.slice(0, halfLength),
      deck2: vehicles.slice(halfLength),
      selectedFeature: undefined,
    };
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
          playersTurn={lastWinner || constants.PLAYER_1}
          selectedFeature={selectedFeature}
          status={status}
        />
        <ControlPanel
          status={status}
          isPlayEnabled={!!selectedFeature}
        />
      </div>
    );
  }
}

export default App;
