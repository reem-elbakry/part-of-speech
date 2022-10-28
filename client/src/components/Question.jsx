import React, { useState, useEffect, useRef } from "react";
import { flushSync } from "react-dom";

const Question = ({ question, totalQuestions, currentQuestion, setAnswer }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const timer = useRef(null);
  const progressBar = useRef(null);

  const gotoNextQuestion = () => {
    if (timer.current) {
      clearTimeout(timer.current);
    }
    flushSync(() => {
      setAnswer(selectedOption);
    });
    setSelectedOption(null);
  };

  return <div>Question</div>;
};

export default Question;
