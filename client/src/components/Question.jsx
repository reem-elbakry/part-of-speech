import React, { useState, useRef } from "react";
import { flushSync } from "react-dom";

const Question = ({
  question,
  currentQuestionNum,
  totalQuestionsNum,
  setAnswer,
}) => {
  const options = ["noun", "verb", "adverb", "adjective"];
  const [selectedOption, setSelectedOption] = useState(null);
  const progressBar = useRef(null);

  const gotoNextQuestion = () => {
    flushSync(() => {
      setAnswer(selectedOption);
    });

    setSelectedOption(null);
  };

  return (
    <>
      {/* progressBar */}
      <div className="progress-bar" ref={progressBar}></div>
      {/* Question Header */}
      <div className="font-mono">
        {currentQuestionNum}
        &nbsp; of &nbsp;
        {totalQuestionsNum}
      </div>
      {/* Question */}
      <div className="text-gray-700 text-base mb-2 mt-10">
        <span className="text-cyan-600 font-bold text-xl h-8">
          {/* //! can't read it at first??  solved with flush in quiz screen! */}
          {question.word.charAt(0).toUpperCase() + question.word.slice(1)}
        </span>
        &nbsp; is a ....
      </div>
      {/* Options */}
      <div className="grid grid-rows-2 grid-cols-2 gap-12 mt-12">
        {options.map((option, index) => {
          return (
            <button
              className={
                selectedOption === option && question.pos === option
                  ? "option correct"
                  : selectedOption === option && question.pos !== selectedOption
                  ? "option incorrect"
                  : "option"
              }
              key={index}
              onClick={(e) => setSelectedOption(e.target.innerHTML)}
            >
              {option}
            </button>
          );
        })}
      </div>
      {/* Control */}
      <button className="next" onClick={gotoNextQuestion}>
        Next
      </button>
    </>
  );
};

export default Question;
