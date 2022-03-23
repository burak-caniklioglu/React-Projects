import React from "react";
import "./Card.css";

const Card = ({cards}) => {
  return (
    <div>
      <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-5">
        {cards.map((card) => (
          <div className="col">
            <div
              className="card bg-dark text-white text-start p-3"
              key={card.id} 
            >
              <h2 className="card-title my-2 ">{card.title}</h2>
              <img className="card-img" src={card.image} alt="" />
              <div className="overlay">
                <p className="card-img-desc">{card.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
