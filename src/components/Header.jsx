import { useEffect, useState } from "react";
import {  Link } from "react-router-dom";

const Header = () => {

  const [nav, setNav] = useState({ top: "0%" });
  const [blur,setBlur] = useState(false)

  useEffect(() => {
    let lastScroll = 0;

    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > 80) {
        setBlur(true)
      } else {
        setBlur(false)
      }
      if (scrollTop > lastScroll) {
        setNav({ top: "-100%" });
      } else {
        setNav({ top: "0%" });
      }
      lastScroll = scrollTop;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      style={{ top: nav.top }}
      className={`z-20 bg-black ${blur?"bg-opacity-50":"bg-opacity-0"} duration-500 fixed top-0 left-1/2 -translate-x-1/2 container mx-auto max-w-[88rem] flex flex-row items-center justify-center md:justify-between py-[10px] rounded-xl px-[10px]`}>
      <Logo />
      <Navbar />
      <ConnectButton />
    </header>
  );
};

const Logo = () => {
  return (
    <>
      <Link to={"/"} className="flex flex-col  items-start justify-start w-[220px] h-[40px] align-middle overflow-hidden  ">
        <div className="flex flex-col items-center gap-[100px] translate-y-[0%] hover:-translate-y-[81%] duration-500 ease-in-out capitalize md:normal-case ">
          <h1 className="text-white font-bold text-[24px] ">
            developwithayush
          </h1>
          <h1 className="text-white font-bold text-[24px] ">
            developwithayush
          </h1>
        </div>
      </Link>
    </>
  );
};

const Navbar = () => {
  return (
    <>
      <nav className="hidden lg:flex flex-row items-center justify-center gap-[60px] capitalize ">
        <a className="text-[#FFF] text-[20px] font-medium" href="#home">Home</a>
        <a className="text-[#FFF] text-[20px] font-medium" href="#aboutme">about me</a>
        <a className="text-[#FFF] text-[20px] font-medium" href="#project">project</a>
        <a className="text-[#FFF] text-[20px] font-medium" href="#tech">tech</a>
        <a className="text-[#FFF] text-[20px] font-medium" href="#services">Services</a>
      </nav>
    </>
  );
};

const ConnectButton = () => {
  return (
    <button className="hidden md:flex flex-row items-center justify-center w-[180px] h-[52px] bg-white bg-opacity-5 gap-4 rounded-xl connect-parent overflow-hidden border-[1px] border-solid border-[#01FFD1] border-opacity-10 " >
      <div className="flex flex-col  gap-[100px] connect "> 
      <span className="text-[24px] font-semibold text-[#FFF]">Connect</span>
      <span className="text-[24px] font-semibold text-[#FFF]">Connect</span>

      </div>
      
      <ConnectSvg /> </button>
  )
}


const ConnectSvg = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
      <g clipPath="url(#clip0_21_8)">
        <path d="M36 17.0009H30.23C29.9384 15.5714 29.1559 14.2889 28.0181 13.3757C26.8802 12.4625 25.4588 11.9761 24 12.0009H16.15C14.6946 11.9808 13.2779 12.4693 12.1442 13.3821C11.0105 14.2949 10.231 15.5748 9.94 17.0009H4V19.0009H9.93C10.2159 20.4314 10.9954 21.716 12.1324 22.6299C13.2694 23.5439 14.6915 24.0292 16.15 24.0009H24C25.4585 24.0292 26.8806 23.5439 28.0176 22.6299C29.1546 21.716 29.9341 20.4314 30.22 19.0009H36V17.0009ZM19.08 22.0009H16.15C15.0489 22.0388 13.9775 21.6394 13.17 20.8899C12.3624 20.1404 11.8843 19.1018 11.84 18.0009C11.8843 16.9 12.3624 15.8614 13.17 15.1119C13.9775 14.3624 15.0489 13.963 16.15 14.0009H19.09L19.08 22.0009ZM24 22.0009H21V14.0009H24C25.1011 13.963 26.1725 14.3624 26.98 15.1119C27.7876 15.8614 28.2657 16.9 28.31 18.0009C28.2657 19.1018 27.7876 20.1404 26.98 20.8899C26.1725 21.6394 25.1011 22.0388 24 22.0009Z" fill="#FFB800" />
      </g>
      <defs>
        <clipPath id="clip0_21_8">
          <rect width="36" height="36" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}
export default Header;
