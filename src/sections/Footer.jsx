import React, { useState, useEffect } from "react";

const Footer = () => {
  const [isFixed, setIsFixed] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.getElementById("footer");
      const footerOffsetTop = footer?.offsetTop;

      if (
        footerOffsetTop &&
        window.scrollY + window.innerHeight > footerOffsetTop
      ) {
        setIsFixed(false); // Unfix the contact bar once the footer is in view
      } else {
        setIsFixed(true); // Keep the contact bar fixed at the bottom
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="w-full bg-[#e6ecf9] relative min-h-[300px] flex items-center justify-center flex-col gap-4"
      id="footer"
    >
      <div
        id="contact-bar"
        className={`w-full ${
          isFixed ? "fixed" : "relative"
        } z-50 bottom-0 h-[80px] flex items-center justify-center  bg-white`}
      >
        <div className="bg-white max-w-screen-xl flex flex-row w-full justify-center lg:justify-between gap-24 px-16">
          <div className="hidden lg:flex flex-row gap-6 items-center">
            <div className="flex flex-row items-center justify-center gap-2">
              <Whatsapp />
              <p className="font-extrabold text-2xl font-oswald text-black">
                +923157603891
              </p>
            </div>
            <div className="flex flex-row items-center justify-center gap-2">
              <Mail />
              <p className="font-extrabold text-2xl font-oswald text-black">
                Hello@Sajawal.School
              </p>
            </div>
          </div>
          <button className="bg-primary scale-[0.8] sm:scale-100 rounded-full px-5 py-3 shrink-0 whitespace-nowrap text-white font-medium font-poppins text-lg lg:text-xl">
            YES, I WANT TO START RIGHT NOW
          </button>
        </div>
      </div>
      <img
        src="/wp-content/plugins/react-checkout-plugin/build/images/saj-logo.png"
        alt="logo"
        width={270}
        height={750}
      />
      <p className="font-bold font-oswald text-3xl text-primary">
        Lets Connect...
      </p>
      <div className="flex flex-row items-center justify-center gap-4 mt-8 scale-[0.8] lg:scale-100">
        <span className="flex items-center justify-center bg-secondary rounded-full w-14 h-14">
          <a
            rel="noreferrer"
            href="https://www.facebook.com/sheikhsajawals/"
            target="_blank"
          >
            <svg
              className="e-font-icon-svg e-fab-facebook-f"
              viewBox="0 0 320 512"
              fill="#ffffff"
              width={32}
              height={32}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
            </svg>{" "}
          </a>
        </span>
        <span className="flex items-center justify-center bg-secondary rounded-full w-14 h-14">
          <a
            rel="noreferrer"
            className="elementor-icon elementor-social-icon elementor-social-icon-instagram elementor-repeater-item-bc5a395"
            href="https://www.instagram.com/shk.sajawal/?hl=en"
            target="_blank"
          >
            <svg
              className="e-font-icon-svg e-fab-instagram"
              viewBox="0 0 448 512"
              fill="#ffffff"
              width={32}
              height={32}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
            </svg>{" "}
          </a>
        </span>
        <span className="flex items-center justify-center bg-secondary rounded-full w-14 h-14">
          <a
            rel="noreferrer"
            className="elementor-icon elementor-social-icon elementor-social-icon-tiktok elementor-repeater-item-af55d9d"
            href="https://www.tiktok.com/@shk_sajawal"
            target="_blank"
          >
            {" "}
            <svg
              className="e-font-icon-svg e-fab-tiktok"
              fill="#ffffff"
              width={32}
              height={32}
              viewBox="0 0 448 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"></path>
            </svg>{" "}
          </a>
        </span>
        <span className="flex items-center justify-center bg-secondary rounded-full w-14 h-14">
          <a
            rel="noreferrer"
            className="elementor-icon elementor-social-icon elementor-social-icon-youtube elementor-repeater-item-b5106fd"
            href="https://www.youtube.com/c/SheikhSajawal"
            target="_blank"
          >
            <svg
              className="e-font-icon-svg e-fab-youtube"
              viewBox="0 0 576 512"
              fill="#ffffff"
              width={32}
              height={32}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
            </svg>{" "}
          </a>
        </span>
      </div>
      <p className="font-poppins text-md text-center md:text-lg text-black mb-6 mt-8">
        <b>© Copyright</b> 2024 Sajawal.School. All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;

const Whatsapp = () => {
  return (
    <svg
      aria-hidden="true"
      width={32}
      height={32}
      viewBox="0 0 448 512"
      className="fill-secondary"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path>
    </svg>
  );
};

const Mail = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="Layer_2"
      height="32"
      viewBox="0 0 32 32"
      width="32"
      className="fill-secondary"
      data-name="Layer 2"
    >
      <g width="100%" height="100%" transform="matrix(1,0,0,1,0,0)">
        <path
          d="m27 3.14746h-22a4.00427 4.00427 0 0 0 -4 4v17.70508a4.00427 4.00427 0 0 0 4 4h22a4.00427 4.00427 0 0 0 4-4v-17.70508a4.00427 4.00427 0 0 0 -4-4zm-24 8.54419 7.30182 4.01758-7.30182 9.02331zm24 15.16089h-22a1.97437 1.97437 0 0 1 -.94293-.24725l8.02478-9.91669 1.48358.81628a5.35066 5.35066 0 0 0 4.86621.00147l1.48645-.81787 8.02484 9.91681a1.97437 1.97437 0 0 1 -.94293.24725zm2-2.12-7.30188-9.02343 7.30188-4.01752zm0-15.32373-11.53418 6.34607a3.3182 3.3182 0 0 1 -2.93457-.00146l-11.53125-6.34461v-2.26135a2.00229 2.00229 0 0 1 2-2h22a2.00229 2.00229 0 0 1 2 2z"
          fill="#ff5d00"
          fillOpacity="1"
          stroke="none"
          strokeOpacity="1"
        ></path>
      </g>
    </svg>
  );
};
