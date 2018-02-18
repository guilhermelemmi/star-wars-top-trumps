import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import SelectedFeature from './SelectedFeature';

const CardContainer = (props) => {
  const {
    card,
    isClosed,
  } = props;

  return (
    <div className="card-container">
      <div className="card-result">Winner</div>
      <Card 
        card={card}
        isClosed={isClosed}
      />
      <SelectedFeature />
    </div>
  );
}

CardContainer.propTypes = {
  card: PropTypes.object.isRequired,
  isClosed: PropTypes.bool.isRequired,
}

export default CardContainer;
