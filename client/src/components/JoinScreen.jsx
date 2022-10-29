import React from "react";
import { useNavigate } from "react-router-dom";

import logo from "./../assets/images/logo.png";

const JoinScreen = ({ start }) => {
  const navigate = useNavigate();
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

          <p className="text-gray-700 text-base mb-2 mt-10">
            <span className="text-cyan-600 font-bold text-xl h-12">
              Part Of Speech
            </span>
            &nbsp; a category to which a word is assigned in accordance with its
            syntactic functions. In English the main parts of speech are noun,
            adjective, verb, adverb.
          </p>
          <button
            className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-bold py-2 px-4 my-4 rounded"
            onClick={() => {
              start();
              navigate("/quiz");
            }}
          >
            Start
          </button>
        </div>
      </div>
    </>
  );
};

export default JoinScreen;
