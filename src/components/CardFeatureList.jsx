import React from 'react';
import PropTypes from 'prop-types';
import CardFeatureRow from './CardFeatureRow';
import features from '../constants/features';

const CardFeatureList = (props) => {

  const featureListItems = Object.keys(features).map((featureKey) => {
    return (
    <CardFeatureRow
      label={features[featureKey]}
      value={props.card[featureKey]}
    />
    );
  });
  return (
    <div className="card-feature-list">
      {featureListItems}
    </div>
  );
}

export default CardFeatureList;
