import React, { useContext, useEffect, useState } from "react";
import { HandleContext } from "../hooks/HandleState";
import axios from "axios";
import toast from "react-hot-toast";
const server = import.meta.env.VITE_API_URL;

const ConnectPage = () => {
  const {
    name,
    email,
    work,
    setWork,
    date,
    setDate,
    time,
    setTime,
    picture,
    newRequest,
    alreadyreq,
    existingRequest,
  } = useContext(HandleContext);

  useEffect(() => {
    existingRequest();
  }, []);
  return (
    <section className="container relative   mt-[150px] w-max-[88rem] mx-auto px-3">
      <div className=" -z-1 w-[300px] aspect-square bg-[#01FFD1] absolute bottom-0 right-0   rounded-full blur-[200px]" />{" "}
      <div className=" z-10 flex flex-row  bg-white bg-opacity-5  rounded-2xl ">
        <div className="hidden  w-[50%] relative overflow-hidden   xl:flex flex-col items-center justify-center   ">
          <div className="flex flex-col absolute top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2  items-center justify-center rotate-90 opacity-5   ">
            <p className=" tracking-widest text-[#01FFD1] text-[70px] leading-[70px] text-nowrap font-akira">
              Scheduleyo
            </p>
            <p className=" tracking-widest text-[#01FFD1] text-[70px] leading-[70px] text-nowrap font-akira">
              Scheduleyo
            </p>
            <p className=" tracking-widest text-[#01FFD1] text-[70px] leading-[70px] text-nowrap font-akira">
              Scheduleyo
            </p>
            <p className=" tracking-widest text-[#01FFD1] text-[70px] leading-[70px] text-nowrap font-akira">
              Scheduleyo
            </p>
            <p className=" tracking-widest text-[#01FFD1] text-[70px] leading-[70px] text-nowrap font-akira">
              Scheduleyo
            </p>
            <p className=" tracking-widest text-[#01FFD1] text-[70px] leading-[70px] text-nowrap font-akira">
              Scheduleyo
            </p>
            <p className=" tracking-widest text-[#01FFD1] text-[70px] leading-[70px] text-nowrap font-akira">
              Scheduleyo
            </p>
            <p className=" tracking-widest text-[#01FFD1] text-[70px] leading-[70px] text-nowrap font-akira">
              Scheduleyo
            </p>
            <p className=" tracking-widest text-[#01FFD1] text-[70px] leading-[70px] text-nowrap font-akira">
              Scheduleyo
            </p>
            <p className=" tracking-widest text-[#01FFD1] text-[70px] leading-[70px] text-nowrap font-akira">
              Scheduleyo
            </p>
            <p className=" tracking-widest text-[#01FFD1] text-[70px] leading-[70px] text-nowrap font-akira">
              Scheduleyo
            </p>
          </div>
          <p
            style={{ textShadow: "0px 0px 50px rgba(255, 255, 255, 0.6)" }}
            className="text-[60px] font-akira text-center leading-[60px] bg-clip-text text-transparent bg-gradient-to-r from-[#ffffff] to-[#ffffff] py-12 px-6 xl:py-12 xl:px-12 "
          >
            schedule your meeting
          </p>
        </div>
        <div className="xl:w-[50%] flex flex-col gap-10 items-center justify-center w-[100%] py-12 px-6 xl:py-12 xl:px-12">
          {alreadyreq ? (
            <p className="text-[36px] capitalize text-center font-semibold py-36">
              you already <span className="font-bold">schedule</span> a meeting
              we will reach you soon... <br />
              thanks✨
            </p>
          ) : (
            <>
              <img className="w-[80px] rounded-full" src={picture} alt="" />
              <form
                onSubmit={newRequest}
                action="submit"
                className="flex flex-col items-center justify-start gap-7 w-full "
              >
                <Input
                  label={"Enter your name"}
                  type={"string"}
                  width={"full"}
                  credentials={name}
                  // setCredentials={setEmail}
                />
                <Input
                  label={"Enter your e-mail"}
                  type={"email"}
                  width={"full"}
                  credentials={email}
                  // setCredentials={setEmail}
                />
                <Input
                  label={"Work you want"}
                  type={"string"}
                  width={"full"}
                  credentials={work}
                  setCredentials={setWork}
                />

                <Input
                  label={""}
                  type={"date"}
                  width={"full"}
                  credentials={date}
                  setCredentials={setDate}
                  uppercase={true}
                />
                <Input
                  label={"Time"}
                  type={"time"}
                  width={"full"}
                  credentials={time}
                  setCredentials={setTime}
                />

                <button
                  className="py-3 px-6 bg-[#01FFD1] rounded-[12px] text-black font-semibold text-[16px]"
                  type="submit"
                >
                  Schedule your meeting
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

const Input = ({
  label,
  type,
  width,
  credentials,
  setCredentials,
  uppercase,
}) => {
  const [focus, setFocus] = useState(false);
  return (
    <>
      <div className={`flex flex-col items-start w-${width} relative `}>
        <label
          className={`absolute duration-300 ease-in-out transition-all ${
            credentials || focus ? "top-0 text-[16px]" : " text-[16px] top-1/2"
          }   -translate-y-1/2 text-white px-2 mx-6  `}
          style={{
            backdropFilter: "blur(20px)",
          }}
          htmlFor={type}
        >
          {label}
        </label>
        <input
          value={credentials}
          onChange={(e) => setCredentials(e.target.value)}
          onBlur={() => {
            credentials ? setFocus(true) : setFocus(false);
          }}
          onFocus={() => setFocus(true)}
          id={type}
          type={type}
          className={` ${
            uppercase ? "uppercase" : ""
          } w-full bg-transparent border-[1px] border-solid border-[#01FFD1] border-opacity-50 px-6 py-4 text-[16px] rounded-xl outline-none `}
        />
      </div>
    </>
  );
};

export default ConnectPage;
