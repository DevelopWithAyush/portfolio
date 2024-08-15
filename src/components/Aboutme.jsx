import myIcon from "../assets/images/myIcon.png";
const Aboutme = () => {
  return (
    <section
      id="aboutme"
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
          className="col-span-11 self-end  
              "
        >
          <P />
        </div>
      </div>
      <div className="grid grid-cols-12 ">
        <div className="col-span-1 h-full  flex items-center flex-col ">
          <DownLine />
        </div>
        <div className="col-span-11  pt-[100px]  flex flex-col items-center justify-center pr-3 md:pr-5 xl:pr-7">
                  <p className="text-[#B7B7B7] text-[16px] md:text-[20px] font-medium leading-[139%] max-w-[800px] rounded-xl px-6 md:px-7 xl:px-12 py-6 bg-white bg-opacity-5">
                      My name is <span className="text-[#01FFD1]">Ayush Dubey</span>, and
                      I am a 21-year-old web developer and video editor. Over the past two
                      years, I have immersed myself in the world of web development,
                      mastering various technologies and building a diverse range of
                      projects, including e-commerce platforms, chat applications, video
                      calling solutions, and course-selling websites. <br />
                      In the last six months, I've also ventured into video editing, a
                      craft I've quickly grown passionate about. I enjoy the process of
                      creating and refining content and am always excited to learn new
                      technologies and improve my skills.
                  </p>

        </div>
      </div>
    </section>
  );
};

const UpperLine = () => {
  return (
    <div className="z-[98]  w-[4px] h-[140px] xl:h-[200px] rounded-t-full">
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
      className="relative w-[32px]  md:w-[48px]  xl:w-[56px]  "
      style={{
        transitionDuration: ".5s",
        opacity: "1",
        transitionDelay: "1s",
      }}
    >
      {/* <div className=" bg-[#3cfc46] w-[50%] h-[50%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 blur-[20px]"></div> */}
      <img className="w-full"  src={myIcon} alt="" />
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
      About <span className="font-medium text-[#797979]">{`me`}</span>
    </p>
  );
};

const Background = () => {
  return (
    <div className=" hidden lg:flex">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        w="501"
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
            w="1315"
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
    </div>
  );
};
export default Aboutme;
