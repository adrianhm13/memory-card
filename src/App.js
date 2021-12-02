import "./App.css";
import React, { useEffect, useState, useRef } from "react";
import CardGrid from "./components/CardGrid";
import Score from "./components/Score";

const App = () => {
  const [cardList, setCardList] = useState([
    { id: 1, picture: "https://static.displate.com/162x227/displate/2017-02-16/465c7b4893e6f1a65410ca409502e88e.jpg", title: "Whiplash" },
    { id: 2, picture: "https://static.displate.com/162x227/displate/2020-01-23/0c9d50341779d10bdaacef96ff15e967_7ff0761a35279a70fdf45523bd526ba9.jpg", title: "Parasite" },
    { id: 3, picture: "https://static.displate.com/162x227/displate/2014-05-07/9101fa57636e24278837711f73510bbc.jpg", title: "Gladiator" },
    { id: 4, picture: "https://static.displate.com/162x227/displate/2014-04-18/fd180c32f3c92d444ccfa36c2d495160.jpg", title: "Forrest Gump" },
    { id: 5, picture: "https://static.displate.com/162x227/displate/2015-09-15/4ce4ff8a5ff28a7ada1a67055daef49b.jpg", title: "Interstellar" },
    { id: 6, picture: "https://static.displate.com/162x227/displate/2014-04-20/72dd68a8b786201d6f2bdca4a6628ea1.jpg", title: "Inception" },
    { id: 7, picture: "https://static.displate.com/162x227/displate/2015-08-28/374b05d5cec025c957b86ea0ad853ddc.jpg", title: "Shutter Island" },
    { id: 8, picture: "https://static.displate.com/162x227/displate/2014-12-11/b68851bf99ffccb4c7b75ae96368d674.jpg", title: "The Prestige" },
    { id: 9, picture: "https://static.displate.com/162x227/displate/2014-04-20/4f70467040c7f0430f97f1a8c7912077.jpg", title: "The Truman Show" },
    { id: 10, picture: "https://static.displate.com/162x227/displate/2016-07-07/0172d97c47aa71094ff8029af9f3ac88.jpg", title: "Into The Wild" },
    { id: 11, picture: "https://static.displate.com/162x227/displate/2017-01-08/430fccc6cc501f0c5eb527e3cf9b356c.jpg", title: "Arrival" },
    { id: 12, picture: "https://static.displate.com/162x227/displate/2014-04-20/e0c785262d89b9a2ef1b55a8064ec4ed.jpg", title: "Seven" },
    { id: 13, picture: "https://static.displate.com/162x227/displate/2014-04-16/36ea9e5040cfbe03ae7bb97492ce0ce3.jpg", title: "American Psyco" },
    
  ]);
  const [cardsClicked, setCardsClicked] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const isMounted = useRef(false);

  useEffect(() => {
    shuffleCards();
    if (isMounted.current) {
      if (!checkGameOver()) {
        setCurrentScore(currentScore + 1);
      }
    } else {
      isMounted.current = true;
    }
  }, [cardsClicked]);

  useEffect(() => {
    console.log("Current", currentScore);
    console.log("Best", bestScore);
    if (currentScore > bestScore) {
      setBestScore(currentScore);
    }
  }, [currentScore]);

  const handleCardClicked = (card) => {
    setCardsClicked([...cardsClicked, card]);
  };

  const checkGameOver = () => {
    console.log('Check Game Over')
    const idCardsClicked = cardsClicked.map((item) => {
      return item.id;
    });
    const isDuplicated = idCardsClicked.some((item, index) => {
      return idCardsClicked.indexOf(item) !== index;
    });

    if (isDuplicated) {
      setCardsClicked([]);
      setCurrentScore(0);
      isMounted.current = false
      return true;
    }
    return false;
  };

  const shuffleCards = () => {
    let copyCardList = cardList.slice();
    for (let i = copyCardList.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copyCardList[i], copyCardList[j]] = [copyCardList[j], copyCardList[i]];
    }
    setCardList(copyCardList);
  };

  return (
    <div>
      <div className="container-fluid bg-light py-4"><h1 className="text-center">Films Memory Card</h1></div>
      <Score currentScore={currentScore} bestScore={bestScore} />
      <CardGrid
        cardList={cardList}
        cardsClicked={cardsClicked}
        onCardsClicked={handleCardClicked}
      />
      <div className="container-fluid bg-light fixed-bottom text-center">Pictures from <a href="https://displate.com/browse-collections">Displate</a></div>
    </div>
  );
};

export default App;
