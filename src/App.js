/* eslint-disable react-hooks/exhaustive-deps */
import "./App.css";
import React, { useEffect, useState } from "react";
import CardGrid from "./components/CardGrid";

const App = () => {
  const [cardList, setCardList] = useState([
    { id: 1, picture: "Picture1", title: "title1" },
    { id: 2, picture: "Picture2", title: "title2" },
    { id: 3, picture: "Picture3", title: "title3" },
    { id: 4, picture: "Picture4", title: "title4" },
  ]);
  const [cardsClicked, setCardsClicked] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const handleCardClicked = (card) => {
    setCardsClicked([...cardsClicked, card]);
    //Logic to check if it's a gameOver
    console.log("Cards clicked", cardsClicked);
  };

  useEffect(() => {
  }, [cardList]);

  useEffect(() => {
    shuffleCards();
  }, [cardsClicked]);

  const shuffleCards = () => {
    let copyCardList = cardList.slice();
    for (let i = copyCardList.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copyCardList[i], copyCardList[j]] = [copyCardList[j], copyCardList[i]];
    }
    setCardList(copyCardList);
  };

  return (
    <div className="App">
      <div className="header"></div>
      <CardGrid
        cardList={cardList}
        cardsClicked={cardsClicked}
        onCardsClicked={handleCardClicked}
      />
    </div>
  );
};

export default App;
