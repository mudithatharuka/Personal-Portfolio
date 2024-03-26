import React from "react";
import HeroBgAnimation from "./HeroBgAnimation";
import { styles } from "../styles";
import { profile } from "../constants/data";
import Typewriter from "typewriter-effect";
import HeroImg from "../assets/New.png";

const Hero = () => {
  return (
    <div
      id="about"
      className={`${styles.paddingX} ${styles.paddingY} bg-background w-full mx-auto clip-path-[polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%)]`}
    >
      <div className="flex justify-center relative max-w-7xl mx-auto ">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between md:gap-8 w-full max-w-7xl">
          <div className="absolute flex justify-end md:right-0  overflow-hidden w-full h-full max-w-[450px] md:max-w-[500px] lg:max-w-max">
            <HeroBgAnimation />
          </div>
          <div className="w-full z-10 text-center md:text-left bg-background pt-4 pb-4">
            <p className="font-bold text-txtPrimary mb-2 text-[30px] sm:text-[40px] lg:text-[50px] leading-[38px] sm:leading-[48px] lg:leading-[68px]">
              Hi, I am
              <br />
              {profile.name}.
            </p>
            <span className="block md:flex font-semibold text-txtPrimary mb-4 text-[22px] lg:text-[32px] lg:leading-[68px]">
              I am a &nbsp;
              <span className="text-primary">
                <Typewriter
                  options={{
                    strings: profile.roles,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </span>
            <p className="text-txtSecondary text-[16px] lg:text-[20px] leading-[22px] lg:leading-[32px] mb-10">
              {profile.description}
            </p>
            <div className="z-50">
              <button
                onClick={() => {
                  window.open(
                    profile.urls.resume,
                    "_blank",
                    "noopener,noreferrer"
                  );
                }}
                className={`${styles.padding} button-gradient btn-gradient w-[95%] max-w-[300px] text-center text-white rounded-3xl cursor-pointer font-semibold text-[18px] lg:text-[20px] transi`}
              >
                Check Resume
              </button>
            </div>
          </div>
          <div className="w-full flex mt-6 mb-6 justify-center z-10">
            <img
              src={HeroImg}
              alt="Hero Image"
              className="w-full h-full max-w-[280px] md:max-w-[400px] rounded-full border-[2px] border-primary"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
