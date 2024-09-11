import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { HandleContext } from "../hooks/HandleState";
import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
const server = import.meta.env.VITE_API_URL;


const Connect = ({ connect, setConnect }) => {
  const { fetchUser } = useContext(HandleContext);

  return (
    <>
      <div
        onClick={() => setConnect(false)}
        className={` ${
          connect ? "scale-100" : "scale-0"
        } ease-in-out duration-500 z-[100] fixed top-0 left-0 right-0 bottom-0 h-screen bg-black bg-opacity-10 `}
        style={{
          backdropFilter: "blur(20px)",
        }}
      />

      <div
        className={`flex flex-col items-center justify-start gap-8 ${
          connect ? "scale-100" : "scale-0"
        } ease-in-out duration-500 z-[100] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] bg-[#0B0B0B] max-h-screen py-10 px-6 rounded-3xl overflow-hidden `}
        style={{
          backdropFilter: "blur(20px)",
        }}
      >
        <div className=" z-[100] w-[100px] aspect-square bg-[#01FFD1] absolute top-0 right-0 rounded-full blur-[100px]" />
        <div className=" z-[100] w-[100px] aspect-square bg-[#01FFD1] absolute bottom-0 left-0 rounded-full blur-[100px]" />
        <p className="text-[32px] underline underline-offset-1 ">
          <span className="capitalize font-bold">Let's </span>connect.
        </p>

        {/* <button onClick={login}>on click</button> */}

        <GoogleLogin
          onSuccess={async (credentialResponse) => {
            const decode = jwtDecode(credentialResponse?.credential);

            const toastId = toast.loading("loging...");
            const config = {
              withCredentials: true,
              headers: {
                "Content-Type": "application/json",
              },
            };
            try {
              const { data } = await axios.post(
                `${server}/api/v1/user/login`,
                {
                  email: decode.email,
                  name: decode.name,
                  picture: decode.picture,
                },
                config
              );
              fetchUser();

              // dispatch(userExists(true));
              toast.success(data.message, { id: toastId });
              setConnect(false);
            } catch (error) {
              toast.error(
                error?.response?.data?.message || "Something wend wrong",
                {
                  id: toastId,
                }
              );
            }
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
      </div>
    </>
  );
};

export default Connect;
