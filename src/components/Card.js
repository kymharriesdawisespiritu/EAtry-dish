// Card.js (no changes)
import React from "react";

const Card = ({ meal, imageUrl, searchQuery }) => {
  return (
    <div className="card w-64 h-80 m-4 bg-white rounded-lg shadow-md">
      {searchQuery ? (
        <div className="w-64 h-64 bg-white rounded shadow-md">
          <img src={imageUrl} alt={meal.strMeal} className="w-full h-48 object-cover" />
          <h2 className="text-lg font-bold">{meal.strMeal}</h2>
          <p>{meal.strCategory}</p>
        </div>
      ) : (
        <div>
          <img
            src={meal.strCategoryThumb}
            alt={meal.strCategory}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-lg font-bold">{meal.strCategory}</h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;