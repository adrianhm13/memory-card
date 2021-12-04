/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import Card from "./Card";

const CardGrid = ({cardList, handleChoice}) => {

  return (
    <div className="container">
    <div className="d-flex flex-row flex-wrap justify-content-center align-items-center">
      {cardList.map((card) => {
        return (
          <Card
            key={card.id}
            card={card}
            handleChoice={handleChoice}
          />
        );
      })}
    </div>
    </div>

  );
};

export default CardGrid;
