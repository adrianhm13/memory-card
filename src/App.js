import "./App.css";
import React, { useEffect, useState } from "react";
import CardGrid from "./components/CardGrid";
import Score from "./components/Score";
import uniqid from "uniqid";

const films = [
  {
    picture:
      "https://static.displate.com/162x227/displate/2017-02-16/465c7b4893e6f1a65410ca409502e88e.jpg",
    matched: false,
  },
  {
    picture:
      "https://static.displate.com/162x227/displate/2020-01-23/0c9d50341779d10bdaacef96ff15e967_7ff0761a35279a70fdf45523bd526ba9.jpg",
    matched: false,
  },
  {
    picture:
      "https://static.displate.com/162x227/displate/2014-05-07/9101fa57636e24278837711f73510bbc.jpg",
    matched: false,
  },
  {
    picture:
      "https://static.displate.com/162x227/displate/2014-04-18/fd180c32f3c92d444ccfa36c2d495160.jpg",
    matched: false,
  },
  {
    picture:
      "https://static.displate.com/162x227/displate/2015-09-15/4ce4ff8a5ff28a7ada1a67055daef49b.jpg",
    matched: false,
  },
  {
    picture:
      "https://static.displate.com/162x227/displate/2014-04-20/72dd68a8b786201d6f2bdca4a6628ea1.jpg",
    matched: false,
  },
  {
    picture:
      "https://static.displate.com/162x227/displate/2015-08-28/374b05d5cec025c957b86ea0ad853ddc.jpg",
    matched: false,
  },
  {
    picture:
      "https://static.displate.com/162x227/displate/2014-12-11/b68851bf99ffccb4c7b75ae96368d674.jpg",
    matched: false,
  },
  {
    picture:
      "https://static.displate.com/162x227/displate/2014-04-20/4f70467040c7f0430f97f1a8c7912077.jpg",
    matched: false,
  },
  {
    picture:
      "https://static.displate.com/162x227/displate/2016-07-07/0172d97c47aa71094ff8029af9f3ac88.jpg",
    matched: false,
  },
  {
    picture:
      "https://static.displate.com/162x227/displate/2017-01-08/430fccc6cc501f0c5eb527e3cf9b356c.jpg",
    matched: false,
  },
  {
    picture:
      "https://static.displate.com/162x227/displate/2014-04-20/e0c785262d89b9a2ef1b55a8064ec4ed.jpg",
    matched: false,
  },
  {
    picture:
      "https://static.displate.com/162x227/displate/2014-04-16/36ea9e5040cfbe03ae7bb97492ce0ce3.jpg",
    matched: false,
  },
];

const App = () => {
  const [cardList, setCardList] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);

  const shuffleCards = () => {
    const cardList = [...films, ...films]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: uniqid() }));
    setTurns(0);
    setCardList(cardList);
  };

  const handleChoice = (card) => {
    !choiceOne ? setChoiceOne(card) : setChoiceTwo(card);
  };

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      console.log("evaluating");
      if (choiceOne.picture === choiceTwo.picture) {
        setCardList((prevState) => {
          return prevState.map((card) => {
            if (card.picture === choiceOne.picture) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
      } else {
      }
      resetTurn();
    }
  }, [choiceOne, choiceTwo]);

  console.log(cardList)
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevState) => prevState + 1);
  };
  return (
    <div>
      <div className="container-fluid bg-light py-4">
        <h1 className="text-center">Films Memory Card</h1>
      </div>
      <div className="container-fluid my-5 text-center">
        <button
          onClick={shuffleCards}
          type="button"
          className="btn btn-primary btn-lg"
        >
          New Game
        </button>
        <h1 className="display-6 text-light my-4">Turns: {turns}</h1>
      </div>

      <CardGrid cardList={cardList} handleChoice={handleChoice} />
      <div className="container-fluid bg-light fixed-bottom text-center">
        Pictures from{" "}
        <a href="https://displate.com/browse-collections">Displate</a>
      </div>
    </div>
  );
};

export default App;
