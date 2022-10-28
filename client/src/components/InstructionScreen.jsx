import React from "react";
import { useNavigate } from "react-router-dom";

import logo from "./../assets/images/logo.png";

const InstructionScreen = () => {
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

          <ol className="text-gray-700 text-base mb-2 mt-10">
            <li>All Question are for 10 marks.</li>
            <li>
              This is a time bound quiz so make sure you finish and submit the
              quiz within the given time limit.
            </li>
            <li>
              10 points will be deducted from youur score for every wrong
              answer.
            </li>
          </ol>
          <button
            className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-bold py-2 px-4 my-4 rounded"
            onClick={() => navigate("/join")}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default InstructionScreen;
