import React from "react";

const Navbar = () => {
  return (
    <nav className="  bg-white px-2  sm:px-5 fixed w-full  h-[100px] z-20 top-0  start-0  border-secondary  border-b ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto ">
        <a href="/" className="flex items-center border-none  ">
          <img
            src="/images/saj-logo.png"
            alt="Logo-Type"
            width={182}
            height={24}
            className="scale-[0.6] sm:scale-[0.8] md:scale-90 xl:scale-100"
          />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
