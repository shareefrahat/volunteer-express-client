import React from "react";
import logo from "../../image/logo.png";
import Navbar from "../Navbar/Navbar";
const Header = () => {
  return (
    <>
      <header className="bg-white flex justify-between px-20 items-center py-4 shadow-md">
        <section>
          <img className="w-[180px]" src={logo} alt="" />
        </section>
        <section>
          <Navbar></Navbar>
        </section>
      </header>
    </>
  );
};

export default Header;
