import React, { useEffect } from "react";
import { useState } from "react";

import logo from "./../assets/images/logo.png";
import Question from "./Question";
import QuizResult from "./QuizResult";

import { GameAPI } from "./APIs/GameAPI";

const QuizScreen = () => {
  const [QuestionList, setQuestionList] = useState([]);
  const [currentQuestionIndex, setcurrentQuestionIndex] = useState(0);
  const [markedAnswers, setmarkedAnswers] = useState(
    new Array(QuestionList.length) //** Fixed size <10> */
  );

  //* Check if question ended */
  const isQuestionEnd = currentQuestionIndex === QuestionList.length;

  //* To get words list from backend API */
  const getWords = async () => {
    try {
      const response = await GameAPI.getWords();
      setQuestionList(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  //* Get words list at Mounting */
  useEffect(() => {
    getWords();
  }, []);

  return (
    <>
      <div className="max-w-2xl rounded shadow-lg bg-gray-100 mx-auto mt-12">
        <div className="px-6 py-4 flex flex-col justify-content items-center">
          <img
            src={logo}
            alt="logo"
            style={{
              display: "inline-block ",
              width: 100,
              height: 70,
            }}
            loading="lazy"
          />
          {isQuestionEnd ? (
            <QuizResult />
          ) : (
            <Question
              question={QuestionList[currentQuestionIndex]}
              totalQuestions={QuestionList.length}
              currentQuestion={currentQuestionIndex + 1}
              setAnswer={(index) => {
                setmarkedAnswers((arr) => {
                  let newArr = [...arr];
                  newArr[currentQuestionIndex] = index;
                  return newArr;
                });

                setcurrentQuestionIndex(currentQuestionIndex + 1);
              }}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default QuizScreen;
