import React from 'react';
import PropTypes from 'prop-types';
import features from '../../constants/features';

const SelectedFeature = (props) => {
  const { 
    selectedFeature,
    featureValue,
  } = props;
  return selectedFeature ? (
    <div className="selected-feature">{features[selectedFeature]}: {featureValue}</div>
  ) : (
    <div className="selected-feature">Choose a feature</div>
  );
}

SelectedFeature.propTypes = {
  selectedFeature: PropTypes.string,
  featureValue: PropTypes.string,
}

export default SelectedFeature;
