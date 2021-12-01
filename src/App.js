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


  const handleCardClicked = (card) => {
    setCardsClicked([...cardsClicked, card]);
    //Logic to check if it's a gameOver
    console.log("Cards clicked", cardsClicked);
  };

  const handleCardList = (newCardList) => {
    setCardList(newCardList);
    console.log("Handle Card List", cardList);
  };

  return (
    <div className="App">
      <div className="header"></div>
      {console.log('Updating')}
      <CardGrid
        cardList={cardList}
        cardsClicked={cardsClicked}
        onCardsClicked={handleCardClicked}
        onCardsList={handleCardList}
      />
    </div>
  );
};

export default App;
