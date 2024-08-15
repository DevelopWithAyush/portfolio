import React, { useState } from "react";
import { LiaAngleRightSolid } from "react-icons/lia";

const CallToAction = ({ setConnect }) => {
  const [arrow, setarrow] = useState({ width: "0px" });
  return (
    <section
      id="testimonial"
          className=" container mx-auto max-w-[88rem] overflow-hidden  relative flex flex-col items-center justify-center border-[1px] border-solid border-[#01FFD1] border-opacity-10  px-[18px] bg-white bg-opacity-5 backdrop-blur-[25px] rounded-3xl  py-[70px] md:py-[98px] xl:py-[140px] gap-[75px] md:gap-[105px] xl:gap-[150px]"
    >
      <div className=" flex flex-col items-center justify-center gap-[35px]">
        <div className="p-6 border border-opacity-10 border-white overflow-hidden rounded-3xl relative  ">
          <div className="bg-[#01FFD1] w-1/2 h-1/2 -translate-x-1/2 -translate-y-1/2 absolute top-0 left-0 blur-[90px]" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2"
            height="2"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="mx-auto size-12 text-black dark:text-white lg:size-24"
          >
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
            <path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66"></path>
            <path d="m18 15-2-2"></path>
            <path d="m15 18-2-2"></path>
          </svg>
        </div>
        <div className="flex flex-col items-center justify-center gap-5">
          <p className="text-[24px] md:text-[33.6px] xl:text-[48px] text-center  font-bold">
            {`"Ready to elevate your online presence ?"`}
          </p>
          <button
            onClick={() => setConnect(true)}
            onMouseLeave={() => {
              return setarrow({ width: "0px" });
            }}
            onMouseEnter={() => {
              return setarrow({ width: "20px" });
            }}
            className="relative py-2 px-6 rounded-xl border-opacity-10 flex items-center gap-5  text-[24px] bg-black bg-opacity-5 backdrop-blur-[25px]  border border-[#01FFD1] "
          >
            <span>Schedule your meeting </span>
            <div className="flex items-center relative   ">
              <div
                className="w-5 h-[2px] bg-white duration-200"
                style={arrow}
              />
              <span className="absolute right-0 translate-x-1/2">
                <LiaAngleRightSolid />
              </span>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
