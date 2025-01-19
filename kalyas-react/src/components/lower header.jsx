import React from "react";
import paper from "../assets/paper.png";
import tool from "../assets/tool.png";
import analysis from "../assets/analysis.png";

const LowerHeader = () => {
  return (
    <>
      <div className="w-[1100px] mx-auto flex justify-between items-center h-[250px] -mt-64">
        <div className="p-10 bg-[#fb414e] text-[#fefefc] w-[32%] ">
          <img src={ paper } alt="paper_icon" className="w-[35%]" />
          <h3 className="text-xl mt-5">Content Concept & Strategy</h3>
          <div className="border-b-4 border-white mt-8 w-10"></div>
          <p className="mt-5 text-sm">
            Aenean pharetra magna ac placerat magna vestibulum lectus mauris
            ultrices eros- Eget aliquet nibh dignissim odio velit mauris.
          </p>
        </div>
        <div className="p-10 bg-[#202b2f] text-[#fefefc] w-[32%]">
          <img src={ tool } alt="paper_icon" className="w-[35%]" />
          <h3 className="text-xl mt-5">Design & Concepts</h3>
          <div className="border-b-4 border-white mt-8 w-10"></div>
          <p className="mt-5 text-sm">
            In egestas erat imperdiet sed euismod. A diam maecenas sed enim ut
            sem. Faucibus in omare quam viverra our services better.
          </p>
        </div>
        <div className="p-10 bg-[#202b2f] text-[#fefefc] w-[32%]">
          <img src={ analysis } alt="paper_icon" className="w-[35%]" />
          <h3 className="text-xl mt-5">SEO & Marketing Solutions</h3>
          <div className="border-b-4 border-white mt-8 w-10"></div>
          <p className="mt-5 text-sm">
            In egestas erat imperdiet sed euismod. A diam maecenas sed enim ut
            sem Faucibus in omare quam viverra Our services as well.
          </p>
        </div>
      </div>
    </>
  );
};

export default LowerHeader;
