import React from "react";

const Score = (props) => {
  const { currentScore, bestScore } = props;

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-sm">
          <h5 className="text-light text-center">
            Current Score: {currentScore}
          </h5>
          <h5 className="text-light text-center">Best Score: {bestScore}</h5>
          </div>
      </div>
    </div>
  );
};

export default React.memo(Score);
