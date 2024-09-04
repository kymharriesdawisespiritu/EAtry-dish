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
        <h3>Recommended meals</h3>
        <ul>
          {/* todo: implement recommended meals logic */}
          <li>Recommended meal 1</li>
          <li>Recommended meal 2</li>
        </ul>
      </div>
    </div>
  );
};

export default MealDetail;