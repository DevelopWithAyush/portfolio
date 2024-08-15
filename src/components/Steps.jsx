import { FaCircleCheck } from "react-icons/fa6";

import myIcon from "../assets/images/sparkle.png";



const points = [
  "Client Consultation: We start by understanding your goals and requirements through a thorough consultation process.",
  "Planning & Strategy: Based on your needs, we create a customized plan and strategy to achieve your objectives.",
  "Execution: Our team gets to work, whether it's building a website, creating content, or launching marketing campaigns.",
  "Feedback & Revisions: We value your input and provide opportunities for feedback and revisions to ensure we're on track.",
  "Final Delivery: Once everything meets your satisfaction, we deliver the final product or service to you.",
  "Ongoing Support: Our relationship doesn't end there. We offer ongoing support and maintenance to keep your digital presence running smoothly.",
];
const Steps = () => {
  return (
    <section
      id="steps"
      className=" container flex flex-col gap-5  mx-auto max-w-[88rem]"
    >
      <div className="right-0 absolute">
        <Background />
      </div>
      <div className="grid grid-cols-12 ">
        <div className="col-span-1 h-full flex flex-col items-center gap-[10px] md:gap-[14px] xl:gap-5 ">
          <UpperLine />
          <Emoji />
        </div>
        <div
          className="col-span-11   pt-[140px] xl:pt-[300px]
              "
        >
          <P />
        </div>
      </div>
      <div className="grid grid-cols-12 ">
        <div className="col-span-1 h-full  flex items-center flex-col ">
          <DownLine />
        </div>
        <div className="col-span-11  pt-[150px]  pb-[300px] flex flex-col items-center justify-center px-3 lg:px-10">
          <div className=" flex flex-col items-center justify-center py-6 px-6 bg-white bg-opacity-5 max-w-[700px] rounded-xl gap-5 border-[1px] border-solid border-[#01FFD1] border-opacity-10">
            {points.map((point, index) => {
                return <Points key={index} point={point} index={index} />;
              })}
          </div>
        </div>
      </div>
    </section>
  );
};

const UpperLine = () => {
  return (
    <div className="z-[98]  w-[4px] h-[140px] xl:h-[300px] rounded-t-full">
      <div
        className="w-[4px]  transition-all  rounded-t-full "
        style={{
          background:
            "linear-gradient(180deg, rgba(217, 217, 217, 0.00) 0%, #01FFD1 100%)",

          height: "100%",
          transitionDelay: ".5s",
          transitionDuration: ".5s",
        }}
      ></div>
    </div>
  );
};
const DownLine = () => {
  return (
    <div className=" w-[4px] h-full ">
      <div
        className="w-[4px]    "
        style={{
          background: "linear-gradient(180deg,#01FFD1 0%, #01FFD1  100%)",
          height: "100%",
          transitionDelay: "1.5s",
          transitionDuration: ".5s",
        }}
      ></div>
    </div>
  );
};

const Emoji = () => {
  return (
    <div
      className="relative text-[32px] leading-[32px] md:text-[48px] md:leading-[48px] xl:text-[56px] xl:leading-[56px]   font-bold "
      style={{
        transitionDuration: ".5s",
        opacity: "1",
        transitionDelay: "1s",
      }}
    >
      {/* <div className=" bg-[#3cfc46] w-[50%] h-[50%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 blur-[20px]"></div> */}
      <img className="w-[70px]" src={myIcon} alt="" />
    </div>
  );
};

const P = () => {
  return (
    <p
      className="relative text-[32px] max-w-3xl leading-[32px] md:text-[48px] md:leading-[48px] lg:text-[48px] lg:leading-[48px] xl:text-[56px] xl:leading-[56px] pl-4 duration-[0.3s] delay-[0.8s] font-bold "
      style={{
        transitionDuration: ".5s",
        opacity: "1 ",

        transitionDelay: "1s",
      }}
    >
      Steps{" "}
      <span className="font-medium text-[#797979]">{` that we used to grow your Business.`}</span>
    </p>
  );
};

const Background = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="501"
        height="840"
        viewBox="0 0 501 840"
        fill="none"
      >
        <g filter="url(#filter0_f_12_25)">
          <path
            d="M640.492 427.042C452.441 429.649 409.815 588.247 332.087 547.837C254.36 507.427 270.908 354.043 301.498 305.378C332.087 256.712 1033.44 264.099 1038.66 360.995C1043.89 457.892 1036.6 501.131 965.947 547.837C856.018 620.505 828.544 424.435 640.492 427.042Z"
            fill="#01FFD1"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_12_25"
            x="0.5"
            y="0.5"
            width="1315"
            height="839"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="137.75"
              result="effect1_foregroundBlur_12_25"
            />
          </filter>
        </defs>
      </svg>
    </>
  );
};

const Points = ({ point, index }) => {
  return (
    <div
      className={`relative grid grid-cols-12 items-start     w-full `}
 
    >
      <div className="mt-[6px] col-span-1 flex items-center justify-center">
        <FaCircleCheck className="text-[16px] mt-1 text-green-500  " />
      </div>
      <p className="col-span-11 text-[20px] font-normal ">{point}</p>
    </div>
  );
};

export default Steps;
