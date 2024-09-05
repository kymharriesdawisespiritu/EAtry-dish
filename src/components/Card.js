import React from 'react';
import '../componentStyler/CardStyle.css'

const Card = ({ meal, imageUrl, onClick }) => {
  return (
    <div class="container-card" onClick={() => onClick(meal)}>
  <div class="card-panel">
    <div class="card-ring">
      <div class="card-hover card1">
        <img src={imageUrl} alt={meal.strMeal} style={{ width: '100%', height: '100%' }} onClick={() => onClick(meal)}></img>
      </div>
      <div class="card-border" onClick={() => onClick(meal)}>
        <p class="card-title">{meal.strMeal}</p>
        <div class="card-slide">
          <h6 class="card-para">{meal.strCategory}</h6>
          <div class="card-line">
            <h6 class="card-para">OUT</h6> <i class="fa fa-plane" aria-hidden="true"></i>
            <h6 class="card-para">£849</h6>
          </div>
          <div class="card-line">
            <h6 class="card-para">RTN</h6> <i class="fa fa-plane" aria-hidden="true"></i>
            <h6 class="card-para">£659</h6>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</div>

  );
};

export default Card;