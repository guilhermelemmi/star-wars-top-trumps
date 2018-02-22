import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import SelectedFeature from './SelectedFeature';

const CardContainer = (props) => {
  const {
    card,
    isClosed,
    isWinner,
    selectedFeature,
    handleFeatureSelection,
    status,
  } = props;

  return (
    <div className={`card-container ${isWinner && 'winner'}`}>
      <div className="card-result">Winner</div>
      <Card 
        card={card}
        isClosed={isClosed}
        handleFeatureSelection={handleFeatureSelection}
        status={status}
        selectedFeature={selectedFeature}
      />
      {!isClosed ? (
        <SelectedFeature
          selectedFeature={selectedFeature}
          featureValue={card[selectedFeature]}
        />
      ) : null}
    </div>
  );
}

CardContainer.propTypes = {
  card: PropTypes.object.isRequired,
  isClosed: PropTypes.bool.isRequired,
  isWinner: PropTypes.bool.isRequired,
  status: PropTypes.string.isRequired,
  selectedFeature: PropTypes.string,
  handleFeatureSelection: PropTypes.func.isRequired,
}

export default CardContainer;
