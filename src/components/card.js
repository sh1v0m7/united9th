// components/Card.js
import React from 'react';
import '../ui/card.css'
const Card = ({ src, cardtitle, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <img src={src} alt={cardtitle} />
      <h3>{cardtitle}</h3>
    </div>
  );
};

export default Card;
