import React from 'react';
import PropTypes from 'prop-types';
import CardFeatureRow from './CardFeatureRow';
import features from '../../constants/features';

const CardFeatureList = (props) => {
  const {
    card,
    handleFeatureSelection,
    status,
    selectedFeature,
  } = props;

  const featureListItems = Object.keys(features).map((featureKey) => {
    return (
    <CardFeatureRow
      key={`feature-${featureKey}`}
      featureKey={featureKey}
      label={features[featureKey]}
      value={card[featureKey]}
      handleFeatureClick={handleFeatureSelection}
      selectedFeature={selectedFeature}
      status={status}
    />
    );
  });

  return (
    <div className="card-feature-list">
      {featureListItems}
    </div>
  );
}

CardFeatureList.propTypes = {
  card: PropTypes.object.isRequired,
  handleFeatureSelection: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired,
}

export default CardFeatureList;
