import React, { useState } from "react";
import { FaEmber } from "react-icons/fa6";

const Connect = ({ connect,setConnect }) => {
  const [email, setEmail] = useState("");
  const [work, setWork] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  
  return (
    <>
      <div
        onClick={() => setConnect(false)}
        className={` ${connect ? "scale-100" : "scale-0"} ease-in-out duration-500 z-[100] fixed top-0 left-0 right-0 bottom-0 h-screen bg-black bg-opacity-10 `}
        style={{
          backdropFilter: "blur(20px)",
        }}
      />

      <div className={`flex flex-col items-center justify-start gap-8 ${connect?"scale-100":"scale-0"} ease-in-out duration-500 z-[100] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] bg-[#0B0B0B] max-h-screen py-10 px-6 rounded-3xl overflow-hidden `} 
        style={{
        backdropFilter:"blur(20px)"
      }}
      >
        <div className=" z-[100] w-[100px] aspect-square bg-[#01FFD1] absolute top-0 right-0 rounded-full blur-[100px]"/>
        <div className=" z-[100] w-[100px] aspect-square bg-[#01FFD1] absolute bottom-0 left-0 rounded-full blur-[100px]"/>
        <p className="text-[32px] underline underline-offset-1 "><span className="capitalize font-bold">Let's </span>connect.</p>

        <form onSubmit={(e) => {
          e.preventDefault()
        }} action="submit" className="flex flex-col items-center justify-start gap-10 w-full ">
          <Input label={"Enter your e-mail"} type={"email"} width={"full" } credentials={email} setCredentials={setEmail} />
          <Input label={"Work you want"} type={"string"} width={"full"} credentials={work} setCredentials={setWork} />

          <Input label={""} type={"date"} width={"full"} credentials={date} setCredentials={setDate} />
          <Input label={"Time"} type={"time"} width={"full"} credentials={time} setCredentials={setTime} />

          <button  className="py-3 px-6 bg-[#01FFD1] rounded-[12px] text-black font-semibold text-[16px]" type="submit" >Schedule meeting</button>

          {/* </div> */}
        </form>
      </div>
    </>
  );
};

const Input = ({ label, type, width,credentials, setCredentials }) => {

  const [focus,setFocus] = useState(false)
  return (
    <>
      <div className={`flex flex-col items-start w-${width} relative `}>
        <label className={`absolute duration-300 ease-in-out transition-all ${focus ? "top-0 text-[16px]" :" text-[16px] top-1/2"}   -translate-y-1/2 text-white px-2 mx-6  bg-[#0B0B0B] `} style={{
          backdropFilter: "blur(20px)"
        }} htmlFor={type}>{ label}</label>
        <input value={credentials} onChange={(e)=>setCredentials(e.target.value)}   onBlur={() => {credentials?setFocus(true):setFocus(false)}} onFocus={() => setFocus(true)} id={type} type={type} className="w-full bg-transparent border-[1px] border-solid border-[#01FFD1] border-opacity-50 px-6 py-4 text-[16px] rounded-xl outline-none " />
      </div>
    </>
  )
}
export default Connect;
