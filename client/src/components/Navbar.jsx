import React from "react";

const Navbar = ({ retry }) => {
  return (
    <>
      <nav className="w-full  p-6 shadow-lg cursor-pointer">
        <span
          className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-fuchsia-600 hover:from-fuchsia-600 hover:to-cyan-600"
          onClick={retry}
        >
          Part Of Speech{" "}
        </span>
      </nav>
    </>
  );
};

export default Navbar;
