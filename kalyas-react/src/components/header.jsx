import React from "react";
import headerImage from "../assets/header_image.jpg";

const Header = () => {
  return (
    <>
      <header className="h-[850px] relative">
        <div
          className="w-full h-full bg-cover absolute -z-10 -mt-56"
          style={{ backgroundImage: `url(${headerImage})` }}
        ></div>
        <nav className="flex justify-between w-[1100px] h-auto mx-auto mt-10">
          <div className="text-white font-bold text-5xl font-Noto">
            <a href="#">
              Kallyas<big className="text-[#fb414e]">.</big>
            </a>
          </div>
          <div className="w-[500px] flex items-center justify-start">
            <ul className="flex justify-around text-white w-full">
              <li>
                <a
                  href="#"
                  className="hover:border-b-2 hover:border-b-[#fb414e] pb-[4px]"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:border-b-2 hover:border-b-[#fb414e] pb-[4px]"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:border-b-2 hover:border-b-[#fb414e] pb-[4px]"
                >
                  Works
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:border-b-2 hover:border-b-[#fb414e] pb-[4px]"
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:border-b-2 hover:border-b-[#fb414e] pb-[4px]"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:border-b-2 hover:border-b-[#fb414e] pb-[4px]"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="w-[1100px] h-auto mx-auto mt-20 place-items-center">
          <div>
            <h1 className="text-6xl text-white text-center font-bold">
              Helping Business And Companies Innovate Transform And Lead
            </h1>
            <p className="text-white w-[600px] mx-auto mt-10 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae, odit officiis maxime ea asperiores dolore nobis
              tempora ipsum repellat beatae earum distinctio harum assumenda
              illum reiciendis culpa sint eligendi quisquam?
            </p>
          </div>
        </div>
        <div className="w-[1100px] h-auto mx-auto mt-14 place-items-center">
          <div className="flex justify-between w-[22rem]">
            <button className="bg-[#fb414e] border-2 border-transparent text-white px-10 font-bold hover:border-[#fb414e] hover:bg-transparent hover:font-bold hover:text-[#fb414e]">
              Start Now
            </button>
            <button className="border-[#fb414e]  border-2 text-[#fb414e] px-10 py-2 font-bold hover:border-transparent hover:bg-[#fb414e] hover:text-white">
              Our Services
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
