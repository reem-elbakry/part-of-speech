import React, { useState } from "react";
import { flushSync } from "react-dom";

import { motion } from "framer-motion";

const Question = ({
  question,
  currentQuestionNum,
  totalQuestionsNum,
  setAnswer,
}) => {
  const options = ["noun", "verb", "adverb", "adjective"];
  const [selectedOption, setSelectedOption] = useState(null);

  const gotoNextQuestion = () => {
    flushSync(() => {
      setAnswer(selectedOption);
    });

    setSelectedOption(null);
  };

  return (
    <>
      {/* Question Header */}
      <div className="flex flex-col justify-content items-center">
        <div className="font-mono">
          {currentQuestionNum}
          &nbsp; of &nbsp;
          {totalQuestionsNum}
        </div>
      </div>
      {/* progressBar */}
      <motion.div
        className="progress-bar h-1"
        initial={{ width: 0 }}
        animate={{
          width: `${((currentQuestionNum - 1) / totalQuestionsNum) * 100}%`,
        }}
      ></motion.div>

      {/* Question */}
      <div className="px-6 py-4 flex flex-col justify-content items-center">
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
                    : selectedOption === option &&
                      question.pos !== selectedOption
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
      </div>
    </>
  );
};

export default Question;
