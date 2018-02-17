import React from 'react';
import Card from './Card';
import SelectedFeature from './SelectedFeature';

const CardContainer = () => (
  <div className="card-container">
    <div className="card-result">Winner</div>
    <Card />
    <SelectedFeature />
  </div>
);

export default CardContainer;
