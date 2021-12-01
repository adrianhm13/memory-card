/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import Card from "./Card";

const CardGrid = (props) => {
  const cardList = props.cardList;

  useEffect(() => {
    shuffleCards();
  }, [props.cardsClicked]);

  const shuffleCards = () => {
    for (let i = cardList.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cardList[i], cardList[j]] = [cardList[j], cardList[i]];
    }
    return cardList;
  };

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
