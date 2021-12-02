import React from "react";

const Card = (props) => {
  return (
    <figure onClick={() => props.onCardsClicked(props.card)} className="figure me-3" role="button">
      <img src={props.card.picture} alt="props.card.title" className="figure-img img-fluid rounded"/>
      <figcaption className="figure-caption text-center text-light">{props.card.title}</figcaption>
    </figure>
  );
};

export default Card;
