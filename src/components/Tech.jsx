import myIcon from "../assets/images/‍tech.png";
import Infinitemovingcr from "../ui/Infinitemovingcr";

const reviews = [
  {
    img: "https://res.cloudinary.com/dpqsatnvt/image/upload/v1714530578/jquery-2_a1aelu.svg",
  },
  {
    img: "https://res.cloudinary.com/dpqsatnvt/image/upload/v1714530475/react-2_hytolh.svg",
  },
  {
    img: "https://res.cloudinary.com/dpqsatnvt/image/upload/v1714530426/html-5-logo-svgrepo-com_qsy315.svg",
  },
  {
    img: "https://res.cloudinary.com/dpqsatnvt/image/upload/v1714530416/Node.js_logo_ucir8w.svg",
  },
  {
    img: "https://res.cloudinary.com/dpqsatnvt/image/upload/v1714530391/Tailwind_CSS_Logo_fphfsj.svg",
  },
  {
    img: "https://res.cloudinary.com/dpqsatnvt/image/upload/v1714530325/favicon_mibjqr.ico",
  },
  {
    img: "https://res.cloudinary.com/dpqsatnvt/image/upload/v1714530314/nextjs-icon-svgrepo-com_nktaag.png",
  },
  {
    img: "https://res.cloudinary.com/dpqsatnvt/image/upload/v1714530772/logo-javascript_mgz5j4.svg",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
  },
  {
    img: "https://res.cloudinary.com/drpaz9o8h/image/upload/v1734863073/ewyylbrjq3qfg45om4t0.png",
  },
];
const Tech = () => {
  return (
    <section
      id="tech"
      className=" container flex flex-col gap-5  mx-auto max-w-[88rem]"
    >
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
        <div className="col-span-11  pt-[75px]   pb-[100px] md:pb-[140px] xl:pb-[300px] flex flex-col items-center justify-center">
          <div className=" flex w-full  relative overflow-x-hidden ">
            <Infinitemovingcr className="[--duration:20s] []">
              {reviews.map((review, index) => (
                <Card key={index} review={review} />
              ))}
            </Infinitemovingcr>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black dark:from-background"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black dark:from-background"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

const UpperLine = () => {
  return (
    <div className="z-[98]  w-[4px] h-[140px] xl:h-[300px] ">
      <div
        className="w-[4px]  transition-all  "
        style={{
          background: "linear-gradient(180deg, #01FFD1 0%, #01FFD1 100%)",

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
    <div className=" w-[4px] h-full rounded-b-full">
      <div
        className="w-[4px]   rounded-b-full "
        style={{
          background: "linear-gradient(180deg,#01FFD1 0%, rgba(217, 217, 217, 0.00)  100%)",
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
      Tech{" "}
      <span className="font-medium text-[#797979]">
        {`that I am use to make you website.`}
      </span>
    </p>
  );
};

const Card = ({ review }) => {
  return (
    <div className=" xl:w-[100px] xl:h-[200px]   w-[50px] md:h-[140px] md:w-[70px] h-[100px]  overflow-hidden text-2xl flex items-center justify-center">
      <img className="w-full h-auto" alt="aysh" src={review.img} />
    </div>
  );
};

export default Tech;
