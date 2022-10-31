import "./App.css";
import { useState } from "react";

import Navbar from "./components/Navbar";
import JoinScreen from "./components/JoinScreen";
import QuizScreen from "./components/QuizScreen";

function App() {
  const [isQuizStarted, setIsQuizStarted] = useState(false);
  return (
    <>
      <Navbar />
      <div className="container">
        {isQuizStarted ? (
          <QuizScreen retry={() => setIsQuizStarted(false)} />
        ) : (
          <>
            <JoinScreen start={() => setIsQuizStarted(true)} />
          </>
        )}
      </div>
    </>
  );
}

export default App;
