import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import JoinScreen from "./components/JoinScreen";
import QuizScreen from "./components/QuizScreen";
import InstructionScreen from "./components/InstructionScreen";

function App() {
  const [isQuizStarted, setIsQuizStarted] = useState(false);
  return (
    <>
      <Navbar />
      <div className="container">
        {isQuizStarted ? (
          <QuizScreen retry={() => setIsQuizStarted(false)} />
        ) : (
          <JoinScreen start={() => setIsQuizStarted(true)} />
        )}
        {/* <Routes>
          <Route
            path="/join"
            element={<JoinScreen start={() => setIsQuizStarted(true)} />}
          />
        </Routes> */}
      </div>
    </>
  );
}

export default App;
