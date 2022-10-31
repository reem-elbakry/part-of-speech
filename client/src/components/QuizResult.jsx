import React from "react";

const QuizResult = ({ result, retry }) => {
  return (
    <>
      <div className="px-6 py-4 flex flex-col justify-content items-center">
        <h2 className="m-3">
          Rank: <span className="text-cyan-500">{result.rank}%</span>{" "}
        </h2>
        <p>
          {" "}
          Selected {result.correct} correct options out of {result.total}{" "}
          questions.
        </p>
        <button onClick={retry} className="next">
          Retry
        </button>
      </div>
    </>
  );
};

export default QuizResult;
