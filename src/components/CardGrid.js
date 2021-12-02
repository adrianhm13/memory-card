/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import Card from "./Card";

const CardGrid = (props) => {
  const cardList = props.cardList;



  return (
    <div className="card-grid">
      {cardList.map((card) => {
        return (
          <Card
            key={card.id}
            card={card}
            onCardsClicked={props.onCardsClicked}
          />
        );
      })}
    </div>
  );
};

export default CardGrid;
