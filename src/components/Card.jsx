import React from 'react';
import CardHeader from './CardHeader';
import CardImage from './CardImage';
import CardFeatureList from './CardFeatureList';

const Card = () => (
  <div className="card">
    <CardHeader />
    <CardImage />
    <CardFeatureList />
  </div>
);

export default Card;
