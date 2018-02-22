import React from 'react';
import PropTypes from 'prop-types';

const CardHeader = (props) => {
  const {
    title,
    model,
    manufacturer,
  } = props;

  return (
    <div className="card-header">
      <h3>{title}</h3>
      <div className="card-additional-info">
        <div>Model: {model}</div>
        <div>Manufacturer: {manufacturer}</div>
      </div>
    </div>
  );
}

CardHeader.propTypes = {
  title: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
  manufacturer: PropTypes.string.isRequired,
}

export default CardHeader;
