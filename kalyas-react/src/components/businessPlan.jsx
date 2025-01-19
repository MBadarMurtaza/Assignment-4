import React from "react";
import workspace from "../assets/workspace.jpg";

const BusinessPlanSection = () => {
  return (
    <>
    <div className="w-[1400px] mx-auto bg-[#202b2f] h-[400px] mt-60 px-[3rem] py-[4rem]">
        <div className="w-[1100px] mx-auto h-full flex justify-between items-start">
            <div className="w-[50%] h-auto">
                <h1 className="text-4xl text-white font-bold">Detailed business plans & the
                    most effective results</h1>
                <p className="text-white text-sm mt-12">Pellentesque habitant morbi tristique senectus et netus et. Accumsan
                    lacus vel
                    facilisis volutpat est velit egestas. Aliquet lectus proin nibh nisl condimentum id
                    venenatis a condimentum. At varius vel pharetra vel turpis nunc eget.</p>
                <button className="px-12 py-1 mt-10 text-white border-2 border-white">Start</button>
            </div>
            <div className="w-[40%] h-full flex justify-between items-center">
                <div className="w-[48%] h-full">
                    <img src={workspace} alt="#" className="w-full h-full" />
                </div>
                <div className="bg-[#fb414e] w-[45%] h-full"></div>
            </div>
        </div>
    </div>
    </>
  );
};

export default BusinessPlanSection;
