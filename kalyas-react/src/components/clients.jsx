import React from "react";
import play from "../assets/play.png";
import desktopImage from "../assets/desktop.jpg";

const Clients = () => {
  return (
    <>
      <div className="w-[1100px] mx-auto mt-20 flex justify-between">
        <div className="w-[45%]">
          <h1 className="font-bold text-4xl">
            We are trusted by more than 3600+ clients.
          </h1>
          <p className="mt-10 font-extralight text-sm text-[#1e1e1e]">
            Pellentesque habitant morbi tristique senectus et netus et. Accumsan
            lacus vel facilisis volutpat est velit egestas. Aliquet lectus proin
            nibh nisl condimentum id venenatis a condimentum. At varius vel
            pharetra vel turpis nunc eget.
          </p>
          <button className="border-2 border-black text-[#1e1e1e] mt-10 px-6 py-2 font-extralight">
            Learn More
          </button>
        </div>
        <div
          className="w-[50%] bg-center -z-10 flex justify-center items-center"
          style={{ backgroundImage: `url(${desktopImage})` }} // Dynamically set background
        >
          <div className="w-20 h-20 flex justify-center items-center">
            <img src={play} alt="Play Button" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Clients;
