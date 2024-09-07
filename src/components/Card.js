import React from 'react';
import '../componentStyler/CardStyle.css'

const Card = ({ meal, imageUrl, onClick }) => {
  return (
    <div className="container-card" onClick={() => onClick(meal)}>
  <div className="card-panel">
    <div className="card-ring">
      <div className="card-hover card1">
        <img src={imageUrl} alt={meal.strMeal} style={{ width: '100%', height: '100%' }} onClick={() => onClick(meal)}></img>
      </div>
      <div className="card-border" onClick={() => onClick(meal)}>
        <p className="card-title">{meal.strMeal}</p>
        <div className="card-slide">
          <h6 className="card-para">{meal.strCategory}</h6>
          <div className="card-line">
            <h6 className="card-para">OUT</h6> <i className="fa fa-plane" aria-hidden="true"></i>
            <h6 className="card-para">£849</h6>
          </div>
          <div className="card-line">
            <h6 className="card-para">RTN</h6> <i className="fa fa-plane" aria-hidden="true"></i>
            <h6 className="card-para">£659</h6>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</div>

  );
};

export default Card;