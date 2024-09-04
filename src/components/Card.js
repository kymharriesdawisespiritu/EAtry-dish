import React from 'react';

const Card = ({ meal, imageUrl, onClick }) => {
  return (
    <div className="h-auto max-w-lg transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0">
      <img src={imageUrl} alt={meal.strMeal} style={{ width: 100, height: 100 }} onClick={() => onClick(meal)} className="h-auto max-w-lg transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0" />
      <h2 >{meal.strMeal}</h2>
      <p>{meal.strCategory}</p>
    </div>
  );
};

export default Card;