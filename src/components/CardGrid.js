/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import Card from "./Card";

const CardGrid = ({cardList, handleChoice, choiceOne, choiceTwo, disabled}) => {

  return (
    <div className="container">
    <div className="d-flex flex-row flex-wrap justify-content-center align-items-center">
      {cardList.map((card) => {
        return (
          <Card
            key={card.id}
            card={card}
            handleChoice={handleChoice}
            flipped={card === choiceOne || card === choiceTwo || card.matched === true}
            disabled={disabled}
          />
        );
      })}
    </div>
    </div>

  );
};

export default CardGrid;
