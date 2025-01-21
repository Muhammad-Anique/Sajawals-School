import React from "react";

const Line = () => {
  return (
    <div className="bg-primary lg:w-[100px] 2xl:w-[170px] h-[4px] shrink-0 hidden lg:flex self-center"></div>
  );
};

const Bubble = ({ title, index }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2   ">
      <div className="rounded-full flex w-9 h-9 md:w-10 md:h-10 lg:w-20 lg:h-20 shrink-0 items-center justify-center border-2 md:border-2 lg:border-4 border-primary">
        <p className="font-oswald text-xl sm:text-2xl  lg:text-3xl font-extrabold text-black ">
          {index}
        </p>
      </div>
      <p className="font-oswald text-md w-[70px] md:w-full  sm:text-lg lg:text-xl font-extrabold text-black lg:w-[150px] text-center">
        {title}
      </p>
    </div>
  );
};

const StepWiseGuide = () => {
  return (
    <div className="flex max-w-screen-xl flex-row py-6 items-start justify-center gap-10 md:gap-8 mt-8">
      <Bubble title="Fill the form" index="1" />
      <Line />
      <Bubble title="Choose Payment Method" index="2" />
      <Line />
      <Bubble title="Enter OTP" index="3" />
      <Line />
      <Bubble title="Get Access" index="4" />
    </div>
  );
};

export default StepWiseGuide;
