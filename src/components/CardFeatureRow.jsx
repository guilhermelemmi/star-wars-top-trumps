import React from 'react';
import PropTypes from 'prop-types';

const CardFeatureRow = (props) => {
  const {
    label,
    value,
  } = props;

  return (
    <div className="card-feature-row">
      <span className="card-feature-label">{label}:</span>
      <span className="card-feature-value">{value}</span>
    </div>
  );
}

CardFeatureRow.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
}

export default CardFeatureRow;


