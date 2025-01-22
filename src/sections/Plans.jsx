import { ChevronRight } from "lucide-react";
import React from "react";

const Plans = () => {
  const exclusiveFeatures = [
    "Private Exclusive Community",
    "Constant Program Releases",
    "Access to an Exclusive SUPPORT Team",
    "Physical at-City Meetups",
    "Job Opportunities and Recommendations",
    "Monthly Group Calls with Sheikh Sajawal",
    "Guest Sessions with Industry Leaders",
  ];

  return (
    <section className="flex items-center justify-centerpy-8 md:py-10 lg:py-16 ">
      <div className="w-full flex flex-col items-center justify-center gap-8 md:gap-16">
        <h1 className="font-oswald text-center font-extrabold text-black text-3xl lg:text-5xl">
          JUST WITHIN THE{" "}
          <span className="text-secondary">NEXT 5 MINUTES…</span> <br /> THIS IS
          WHAT YOU'RE GETTING 👀
        </h1>
        <div className="flex lg:flex-row flex-col  items-center justify-center gap-6 px-4">
          <div className="rounded-xl w-full max-w-[400px] border border-gray-100 md:max-w-[500px] lg:max-w-[600px] p-6 h-auto lg:h-[550px] shadow-xl flex gap-6 flex-col items-center justify-start">
            <div className="flex flex-col text-center w-full border-b-2 py-6 items-center justify-center border-dotted border-secondary">
              <h1 className="text-secondary font-oswald font-extrabold text-2xl lg:text-3xl">
                10+ Weeks of Content
              </h1>
              <p className="font-normal font-oswald text-xl lg:text-2xl mt-2 text-zinc-800 ">
                {"(VALUE: Rs 80,000+)"}
              </p>
            </div>

            <i className="lg:text-xl font-poppins text-lg  text-black text-center tracking-wide p-2">
              ⏳ Unlock new content every week, covering everything from setting
              up a strong base in digital marketing to advanced strategies in
              Facebook and Google Ads.
              <br />
              <br />
              🔥 Content marketing, client acquisition, and gaining insider tips
              from industry experts. <br />
              <br />
              🚀 The program culminates with access to VIP tools and templates
              to boost your online earning potential.
            </i>
          </div>
          <div className="rounded-xl w-full max-w-[400px] border border-gray-100  md:max-w-[500px] lg:max-w-[600px] p-6 h-auto lg:h-[550px]  shadow-xl flex gap-6 flex-col items-center justify-start">
            <div className="flex flex-col text-center w-full border-b-2 py-6 items-center justify-center border-dotted border-secondary">
              <h1 className="text-secondary font-oswald font-extrabold text-2xl lg:text-3xl">
                5+ Exclusive Bonuses
              </h1>
              <p className="font-normal font-oswald text-xl lg:text-2xl mt-2 text-zinc-800 ">
                {"(VALUE: Rs 50,000+)"}
              </p>
            </div>

            <ul className="flex flex-col justify-start items-start self-start gap-4">
              {exclusiveFeatures &&
                exclusiveFeatures.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className="flex flex-row gap-2 items-center "
                    >
                      <div className="w-4 h-4 md:w-5 md:h-5 bg-primary flex items-center justify-center rounded-full shrink-0">
                        <ChevronRight className="w-3 h-3 md:w-4 md:h-4 font-bold text-white" />
                      </div>
                      <p className="font-poppins text-[16px] lg:text-[20px] text-black ">
                        {item}
                      </p>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plans;
