import myIcon from '../assets/images/myIcon.png'
const Project = () => {

    return (
        <section id="project" className=" container flex flex-col gap-5  mx-auto max-w-[88rem]">
            <div className="grid grid-cols-12 ">
                <div className="col-span-1 h-full flex flex-col items-center gap-[10px] md:gap-[14px] xl:gap-5 ">
                    <UpperLine />
                    <ProjectIcon/>

                </div>
                <div
                    className="col-span-11   pt-[140px] xl:pt-[220px]
              "
                >
                    <P />
                </div>
            </div>
            <div className="grid grid-cols-12 ">
                <div className="col-span-1 h-full  flex items-center flex-col ">
                    <DownLine />
                </div>
                <div className="col-span-11  pt-[75px]   pb-[100px] md:pb-[140px] xl:pb-[200px] flex flex-col items-center justify-center">

                    

                </div>
            </div>
        </section>
    );
};

const UpperLine = () => {
    return (
        <div className="z-[98]  w-[4px] h-[140px] xl:h-[200px] ">
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
                    background:
                        "linear-gradient(180deg,#01FFD1 0%, #01FFD1  100%)",
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
                opacity: '1',
                transitionDelay: "1s",
            }}
        >
            {/* <div className=" bg-[#3cfc46] w-[50%] h-[50%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 blur-[20px]"></div> */}
            <img src={myIcon} alt="" />
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
            Project{" "}
            <span className="font-medium text-[#797979]">
                {`that i made`}
            </span>
        </p>
    );
};


const ProjectIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="58" height="58" viewBox="0 0 58 58" fill="none">
            <path d="M38.5716 1.595L32.9157 23.925H38.1365C39.5868 23.925 40.1669 25.085 39.2967 26.535L20.7336 56.84C23.4199 57.6099 26.2007 58.0003 28.9952 58H29C45.0203 57.9879 58 45.0008 58 28.9807C58 16.3923 49.9826 5.67433 38.7722 1.65783L38.5692 1.595H38.5716ZM25.0844 33.93H19.8635C18.4132 33.93 17.8331 32.77 18.7033 31.32L37.2664 1.16C34.5801 0.390148 31.7993 -0.000300567 29.0048 1.73599e-07H29C12.9797 0.0120835 0 12.9993 0 29.0193C0 41.6078 8.01742 52.3257 19.2278 56.3422L19.4308 56.405L25.0844 33.93Z" fill="white" />
        </svg>
    )
}


export default Project;
