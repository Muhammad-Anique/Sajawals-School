import React from "react";
import "../index.css";

const TestimonialCard = ({ image }) => {
  return (
    <div className="w-full min-w-[300px] md:min-w-[400px] xl:min-w-[350px]  relative p-3 rounded-lg bg-black">
      <img
        src={image}
        alt="testimonial"
        className="w-full h-auto object-cover"
        width={500}
        height={500}
        objectFit="cover"
      />
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="w-full max-w-screen-2xl relative flex flex-col items-center justify-center py-32 px-5 md:px-7 lg:px-10">
      <div className="w-full items-center justify-center flex flex-col gap-10">
        <div className="flex flex-col items-center justify-center gap-3">
          <p className="text-primary font-oswald text-2xl text-center lg:text-3xl">{`"REAL" TESTIMONIALS`}</p>
          <h1 className="text-black text-center font-oswald text-3xl lg:text-4xl mt-2 font-extrabold">
            SEE WHAT OTHERS <span className="text-secondary">"LIKE YOU" </span>
            HAVE TO SAY...
          </h1>
        </div>
        <div className="relative w-full max-w-screen-xl h-[800px] overflow-hidden group">
          <div className="bg-gradient-to-b from-white absolute z-10 via-white/0 to-white/0 h-[200px] w-full"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
            <div
              id="animation-cont"
              className="relative flex flex-col gap-4"
              style={{
                animation: "scroll 120s linear infinite",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.animationPlayState = "paused")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.animationPlayState = "running")
              }
            >
              {/* Cards are duplicated for seamless scrolling */}
              <div className="flex flex-col gap-4 ">
                <TestimonialCard image="/images/test1.jpg" />
                <TestimonialCard image="/images/test2.jpg" />
                <TestimonialCard image="/images/test3.jpg" />
                <TestimonialCard image="/images/test4.jpg" />
                <TestimonialCard image="/images/test1.jpg" />
                <TestimonialCard image="/images/test2.jpg" />
                <TestimonialCard image="/images/test3.jpg" />
                <TestimonialCard image="/images/test4.jpg" />
                <TestimonialCard image="/images/test1.jpg" />
                <TestimonialCard image="/images/test2.jpg" />
                <TestimonialCard image="/images/test3.jpg" />
                <TestimonialCard image="/images/test1.jpg" />
                <TestimonialCard image="/images/test2.jpg" />
                <TestimonialCard image="/images/test3.jpg" />
                <TestimonialCard image="/images/test4.jpg" />
              </div>
            </div>
            <div
              id="animation-cont2"
              className="relative flex flex-col gap-4"
              style={{
                animation: "scroll 130s linear infinite",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.animationPlayState = "paused")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.animationPlayState = "running")
              }
            >
              {/* Cards are duplicated for seamless scrolling */}
              <div className="flex flex-col gap-4 ">
                <TestimonialCard image="/images/test3.jpg" />
                <TestimonialCard image="/images/test2.jpg" />
                <TestimonialCard image="/images/test4.jpg" />
                <TestimonialCard image="/images/test1.jpg" />
                <TestimonialCard image="/images/test3.jpg" />
                <TestimonialCard image="/images/test4.jpg" />
                <TestimonialCard image="/images/test2.jpg" />
                <TestimonialCard image="/images/test1.jpg" />
                <TestimonialCard image="/images/test4.jpg" />
                <TestimonialCard image="/images/test3.jpg" />
                <TestimonialCard image="/images/test2.jpg" />
                <TestimonialCard image="/images/test1.jpg" />
                <TestimonialCard image="/images/test4.jpg" />
                <TestimonialCard image="/images/test3.jpg" />
                <TestimonialCard image="/images/test1.jpg" />
              </div>
            </div>
            <div
              id="animation-cont3"
              className="relative flex flex-col gap-4"
              style={{
                animation: "scroll 120s linear infinite",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.animationPlayState = "paused")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.animationPlayState = "running")
              }
            >
              {/* Cards are duplicated for seamless scrolling */}
              <div className="flex flex-col gap-4 ">
                <TestimonialCard image="/images/test1.jpg" />
                <TestimonialCard image="/images/test2.jpg" />
                <TestimonialCard image="/images/test3.jpg" />
                <TestimonialCard image="/images/test4.jpg" />
                <TestimonialCard image="/images/test1.jpg" />
                <TestimonialCard image="/images/test2.jpg" />
                <TestimonialCard image="/images/test3.jpg" />
                <TestimonialCard image="/images/test4.jpg" />
                <TestimonialCard image="/images/test1.jpg" />
                <TestimonialCard image="/images/test2.jpg" />
                <TestimonialCard image="/images/test3.jpg" />
                <TestimonialCard image="/images/test4.jpg" />
                <TestimonialCard image="/images/test1.jpg" />
                <TestimonialCard image="/images/test2.jpg" />
                <TestimonialCard image="/images/test3.jpg" />
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-t from-white bottom-0 absolute z-10 via-white/0 to-white/0 h-[200px] w-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
