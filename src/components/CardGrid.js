/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import Card from "./Card";

const CardGrid = (props) => {
  const cardList = props.cardList;



  return (
    <div className="container">
    <div className="d-flex flex-row flex-wrap justify-content-center align-items-center">
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
    </div>

  );
};

export default CardGrid;
