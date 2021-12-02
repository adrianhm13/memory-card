
import "./App.css";
import React, { useEffect, useState } from "react";
import CardGrid from "./components/CardGrid";
import Score from "./components/Score";

const App = () => {
  const [cardList, setCardList] = useState([
    { id: 1, picture: "Picture1", title: "title1" },
    { id: 2, picture: "Picture2", title: "title2" },
    { id: 3, picture: "Picture3", title: "title3" },
    { id: 4, picture: "Picture4", title: "title4" },
    { id: 5, picture: "Picture5", title: "title5" },
    { id: 6, picture: "Picture6", title: "title6" },
    { id: 7, picture: "Picture7", title: "title7" },
    { id: 8, picture: "Picture8", title: "title8" },
  ]);
  const [cardsClicked, setCardsClicked] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  useEffect(() => {
  }, [cardList]);

  useEffect(() => {
    shuffleCards();
    checkGameOver();
    
  }, [cardsClicked]);

  useEffect(() => {
    console.log("Current",currentScore)
    console.log("Best",bestScore)
    if (currentScore > bestScore) {
      setBestScore(currentScore);
    }
  }, [currentScore, bestScore]);

  const handleCardClicked = (card) => {
    setCardsClicked([...cardsClicked, card]);
    setCurrentScore(currentScore + 1);
  };

  const checkGameOver = () => {

    const idCardsClicked = cardsClicked.map (item => {return item.id})
    const isDuplicated = idCardsClicked.some((item, index) => {return idCardsClicked.indexOf(item) !== index
    })

    if(isDuplicated){
      setCardsClicked([])
      setCurrentScore(0)
    }

    console.log('idCards', idCardsClicked)
    console.log('isDuplicated', isDuplicated)
  }

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
      <Score currentScore={currentScore} bestScore={bestScore} />
      <CardGrid
        cardList={cardList}
        cardsClicked={cardsClicked}
        onCardsClicked={handleCardClicked}
      />
    </div>
  );
};

export default App;
