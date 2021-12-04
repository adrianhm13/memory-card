import React from "react";
import cover from "../pics/cover.jpg";

const Card = ({card, handleChoice, flipped, disabled}) => {

  const handleClick = () => {
    if(!disabled && !flipped) {
      handleChoice(card);
    }
  }

  return (
    <div className="single-card">
    <figure
      className={flipped ? "flipped figure me-3" : "figure me-3"}
      role="button"
    >
      <img
        src={card.picture}
        alt={card.title}
        className="figure-img img-fluid rounded front"
      />
      <img
        src={cover}
        onClick={handleClick}
        alt="cover"
        className="figure-img img-fluid rounded cover"
      />
    </figure>
    </div>
  );
};

export default Card;
