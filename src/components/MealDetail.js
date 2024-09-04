import React from 'react';

const MealDetail = ({ meal }) => {
  return (
    <div >
      <img src={meal.strMealThumb} alt={meal.strMeal} />
      <div>
        <h2 >{meal.strMeal}</h2>
        <p>{meal.strInstructions}</p>
        <p>Category: {meal.strCategory}</p>
        <p>Tags: {meal.strTags}</p>
      </div>
      <div className="mt-4">
        <ul>
        </ul>
      </div>
    </div>
  );
};

export default MealDetail;