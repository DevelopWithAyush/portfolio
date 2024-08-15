const Services = () => {
  return (
    <section id="services" className="  container mx-auto max-w-[88rem] flex flex-col items-start justify-start gap-[150px]  px-5">
      <p
        className="relative text-[32px] max-w-3xl leading-[32px] md:text-[48px] md:leading-[48px] lg:text-[48px] lg:leading-[48px] xl:text-[56px] xl:leading-[56px] pl-4 duration-[0.3s] delay-[0.8s] font-bold "
        style={{
          transitionDuration: ".5s",
          opacity: "1 ",

          transitionDelay: "1s",
        }}
      >
        Services{" "}
        <span className="font-medium text-[#797979]">
          {`that we provide to grow your Business.`}
        </span>
      </p>
      <div className="grid-cols-12 grid items-center  gap-10">
        <div className="col-span-12 md:col-span-6    xl:col-span-4 py-6 px-6 flex flex-col items-start justify-center gap-10    bg-white bg-opacity-5 rounded-xl border-[1px] border-opacity-10 border-solid border-[#01FFD1] ">
          <h3 className="text-[32px] font-semibold">Web Development</h3>
          <p className="text-[20px] ">
            Crafting bespoke websites tailored to your brand's identity,
            ensuring seamless functionality and user experience..
          </p>
        </div>
        <div className="col-span-12 md:col-span-6    xl:col-span-4 py-6 px-6 flex flex-col items-start justify-center gap-10    bg-white bg-opacity-5 rounded-xl border-[1px] border-opacity-10 border-solid border-[#01FFD1] ">
          <h3 className="text-[32px] font-semibold">Video Editing</h3>
          <p className="text-[20px] ">
            Transforming raw footage into captivating visual stories that engage
            and inspire your audience.
          </p>
        </div>
        <div className="col-span-12 md:col-span-6    xl:col-span-4 py-6 px-6 flex flex-col items-start justify-center gap-10    bg-white bg-opacity-5 rounded-xl border-[1px] border-opacity-10 border-solid border-[#01FFD1] ">
          <h3 className="text-[32px] font-semibold">UI/UX </h3>
          <p className="text-[20px] ">
            Crafting bespoke websites tailored to your brand's identity,
            ensuring seamless functionality and user experience..
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
