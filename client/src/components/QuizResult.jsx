import React from "react";

const QuizResult = ({ result, retry }) => {
  return (
    <>
      <h2>Rank: {result.rank}%</h2>
      <p>
        {" "}
        Selected {result.correct} correct options out of {result.total}{" "}
        questions.
      </p>
      <button onClick={retry} className="next">
        Retry
      </button>
    </>
  );
};

export default QuizResult;
