import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";

export const HandleContext = createContext();
const server = import.meta.env.VITE_API_URL;
console.log(server)
const HandleState = ({ children }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [picture, setPicture] = useState("");
  const [work, setWork] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [alreadyreq, setAlreadyreq] = useState(false);

  const [user, setUser] = useState(false);

  const fetchUser = async () => {
    try {
      const response = await fetch(`${server}/api/v1/user/me`, {
        method: "GET", // GET is the default method, so you can omit this
        credentials: "include", // Send cookies and other credentials
      });

      if (!response.ok) {
        throw new Error("Failed to fetch user");
      }

      const data = await response.json(); // Parse the JSON data
      if (data.success) {
        setUser(true);
      }
      setName(data.user.name);
      setEmail(data.user.email);
      setPicture(data.user.picture);

    } catch (err) {
      setUser(false);
      // toast.error("Something went wrong")
      // dispatch(userNotExists()); // Handle errors and dispatch an error action
    }
  };
  const logoutUser = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get(`${server}/api/v1/user/logout`, {
        withCredentials: true,
      });
      toast.success(data.message);
      fetchUser();
    } catch (error) {
      toast.error(error?.response?.data?.message || "something went worng");
    }
  };

  const newRequest = async (e) => {
    e.preventDefault();
    const toastId = toast.loading("loging...");
    const config = {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const { data } = await axios.post(
        `${server}/api/v1/request/newrequest`,
        {
          date,
          time,
          work,
        },
        config
      );

      toast.success(data.message, { id: toastId });
      existingRequest()
    } catch (error) {
      toast.error(error?.response?.data?.message || "Something wend wrong", {
        id: toastId,
      });
    }
  };



  const existingRequest = async () => {
    try {
      const config = {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.get(
        `${server}/api/v1/request/myrequest`,
        config
      );
      if (data.success === true) {
        setAlreadyreq(true);
      } else {
        setAlreadyreq(false);
      }
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    fetchUser(); // Call the async function
  });

  return (
    <HandleContext.Provider
      value={{
        name,
        email,
        work,
        setWork,
        date,
        setDate,
        time,
        setTime,
        user,
        setUser,
        fetchUser,
        logoutUser,
        picture,
        newRequest,
        alreadyreq,existingRequest
      }}
    >
      {children}
    </HandleContext.Provider>
  );
};

export default HandleState;
