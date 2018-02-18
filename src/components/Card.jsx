import React from 'react';
import PropTypes from 'prop-types';
import CardHeader from './CardHeader';
import CardImage from './CardImage';
import CardFeatureList from './CardFeatureList';

const Card = (props) => {
  const {
    isClosed,
    card,
    handleFeatureSelection,
    status,
  } = props;

  return (
    <div className={`card ${isClosed && 'closed'}`}>
      {!isClosed ? (
        <div>
          <CardHeader
            title={card.name}
            model={card.model}
            manufacturer={card.manufacturer}
          />
          <CardImage
            image={card.image}
          />
          <CardFeatureList
            card={card}
            handleFeatureSelection={handleFeatureSelection}
            status={status}
          />
        </div>
      ) : null}
    </div>
  );
}

Card.propTypes = {
  isClosed: PropTypes.bool.isRequired,
  card: PropTypes.object.isRequired,
  handleFeatureSelection: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired,
}

export default Card;
