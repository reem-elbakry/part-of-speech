import React, { useEffect, useState } from "react";

import logo from "./../assets/images/logo.png";
import Question from "./Question";
import QuizResult from "./QuizResult";

import { QuizAPI } from "./APIs/QuizAPI";
import { useNavigate } from "react-router-dom";
import { flushSync } from "react-dom";

const QuizScreen = ({ retry }) => {
  const navigate = useNavigate();
  let [quizList, setQuizList] = useState([]);
  let [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [markedAnswers, setMarkedAnswers] = useState(
    new Array(quizList.length) //** Fixed size <10> */
  );

  //* Check if quiz ended */
  const isQuizEnd = currentQuestionIndex === quizList.length;

  //* To get words list from backend API */
  const getQuizList = async () => {
    try {
      const response = await QuizAPI.getWords();
      setQuizList(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  //* Get words list at did Mounting */
  useEffect(() => {
    //! warning */
    flushSync(() => {
      getQuizList();
    });
  }, []);

  //**TODO Calculate Result */
  const calculateFinalScore = () => {
    let correct = 0;
    quizList.forEach((question, index) => {
      if (question.pos === markedAnswers[index]) {
        correct++;
      }
    });

    console.log(markedAnswers);

    return {
      total: quizList.length,
      correct: correct,
      percentage: Math.trunc((correct / quizList.length) * 100),
    };
  };

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
          {isQuizEnd ? (
            <QuizResult
              result={calculateFinalScore()}
              retry={() => {
                retry();
                navigate("/join");
              }}
            />
          ) : (
            <Question
              question={quizList[currentQuestionIndex]}
              currentQuestionNum={currentQuestionIndex + 1}
              totalQuestionsNum={quizList.length}
              setAnswer={(answer) => {
                setMarkedAnswers((prevAnswers) => [...prevAnswers, answer]);
                setCurrentQuestionIndex(currentQuestionIndex + 1);
              }}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default QuizScreen;
