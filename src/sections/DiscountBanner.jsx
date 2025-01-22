import React from "react";

const DiscountBanner = () => {
  return (
    <div className="flex flex-col items-center justify-center translate-y-4 lg:translate-y-0 px-5 md:px-10 lg:px-16">
      <p className="font-oswald font-medium text-zinc-8000 text-lg lg:text-xl ">
        NORMALLY: RS. <span className="line-through">85,000 ONE-TIME</span>
      </p>
      <p className="font-oswald font-semibold text-primary text-xl lg:text-2xl   mt-8">
        FOR TODAY 😲
      </p>
      <p className="font-oswald text-black  text-3xl lg:text-[40px] text-center px-5  mt-1 font-extrabold">
        {`Rs. 1900/MONTH `}{" "}
        <span className="text-secondary">
          {`(PAYMENT REVIEWS EVERY MONTH)`} ⏳
        </span>
      </p>
      <p className="font-oswald text-center  text-zinc-800 text-xl mt-8 px-5 ">
        NOTE: OUR PAYMENT METHODS ARE 100% SAFE & WE TAKE COMPLETE
        RESPONSIBILITY OF IT.
      </p>
    </div>
  );
};

export default DiscountBanner;
