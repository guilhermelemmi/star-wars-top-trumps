import React from 'react';
import PropTypes from 'prop-types';
import images from '../images/index';

const CardImage = (props) => (
  <div className="card-image-container">
    <img src={images[props.image]} className="card-image" alt="" />
  </div>
);

CardImage.propTypes = {
  image: PropTypes.string.isRequired,
}

export default CardImage;
