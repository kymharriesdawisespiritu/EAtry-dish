import React from 'react';
import '../componentStyler/MealStyle.css'

const MealDetail = ({ meal }) => {
  return (
    <div class="wrap animate pop">
	<div class="overlay">
		<div class="overlay-content animate slide-left delay-2">
			<h1 class="animate slide-left pop delay-4">{meal.strMeal}</h1>
			<p class="animate slide-left pop delay-5" style={{color: 'white', marginBottom: '2.5rem'}}>Kingdom: <em>Plantae</em></p>
		</div>
		<div class="image-content animate slide delay-5" style={{backgroundImage: `url(${meal.strMealThumb})`}}></div>
		<div class="dots animate">
			<div class="dot animate slide-up delay-6"></div>
			<div class="dot animate slide-up delay-7"></div>
			<div class="dot animate slide-up delay-8"></div>
		</div>
	</div>
	<div class="text">
		<p><img class="inset" src={meal.strMealThumb} alt="" />Trees are woody perennial plants that are a member of the kingdom <em>Plantae</em>. All species of trees are grouped by their genus, family, and order. This helps make identifying and studying trees easier.</p>
		<p>Apart from providing oxygen for the planet and beauty when they bloom or turn color, trees are very useful. Certain species of hardwood and softwood trees are excellent for timber, making furniture, and paper.</p>
		<p>When managed properly, trees are a good source of renewable energy and construction material.</p>
	</div>
</div>
  );
};

export default MealDetail;