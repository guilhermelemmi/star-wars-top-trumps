import React from 'react';
import catamaran from '../images/Catamaran.jpg';

const CardImage = () => (  
  <div className="card-image-container">
    <img src={catamaran} className="card-image" alt="" />
  </div>
);

export default CardImage;
