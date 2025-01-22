import React from "react";

const Navbar = () => {
  return (
    <nav className="  bg-white px-2  sm:px-5 fixed w-full  h-[100px] z-20 top-0  start-0  border-secondary  border-b ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto ">
        <a href="/" className="flex items-center border-none  ">
          <img
            src="/images/saj-logo.png"
            alt="Logo-Type"
            width={182}
            height={24}
            className="scale-[0.6] sm:scale-[0.8] md:scale-90 xl:scale-100"
          />
        </a>
        <div className="flex md:order-2 space-x-1 sm:space-x-3 md:space-x-0 rtl:space-x-reverse">
          <a
            rel="noreferrer"
            target="_blank"
            href={"/"}
            className="w-auto  items-center justify-center flex py-[12px] px-[25px] h-auto scale-[0.8] sm:scale-100   bg-primary rounded-full  "
          >
            <p className="text-white flex sm:hidden  text-lg md:text-xl font-inter font-extrabold">
              START
            </p>

            <p className="text-white hidden sm:flex  text-lg md:text-xl font-inter font-extrabold">
              START RIGHT NOW
            </p>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
