import React, { useState } from "react";
import "./Card.css";

const Card = ({ img, name, options }) => {
  const [isTurn, setIsTurn] = useState(true);

  const handleClick = () => {
    setIsTurn(!isTurn);
  };

  return (
    <div className="card">
      {isTurn ? (
        <div className="frontpage" onClick={handleClick}>
          <img src={img} alt={name} />
          <p>{name}</p>
        </div>
      ) : (
        <ul onClick={handleClick}>
          {options.map((option, index) => {
            return <li key={index}>{option}</li>;
          })}
        </ul>
      )}
    </div>
  );
};

export default Card;
