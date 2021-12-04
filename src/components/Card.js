import React from "react";
import cover from "../pics/cover.jpg";

const Card = ({card, handleChoice}) => {

  const handleClick = () => {
    handleChoice(card)
  }

  return (
    <figure
      className="figure me-3"
      role="button"
    >
      <img
        src={card.picture}
        alt={card.title}
        className="figure-img img-fluid rounded"
      />
      <img
        src={cover}
        onClick={handleClick}
        alt="cover"
        className="figure-img img-fluid rounded cover"
      />
    </figure>
  );
};

export default Card;
