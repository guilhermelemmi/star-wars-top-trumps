import React from 'react';
import ScorePanel from './components/ScorePanel';
import GamePanel from './components/GamePanel';
import ControlPanel from './components/ControlPanel';
import './App.css';

const App = () => (
  <div className="star-wars-top-trumps">
    <ScorePanel />
    <GamePanel />
    <ControlPanel />
  </div>
);

export default App;
