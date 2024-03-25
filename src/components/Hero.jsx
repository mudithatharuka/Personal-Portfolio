import React from "react";
import HeroBgAnimation from "./HeroBgAnimation";
import { styles } from "../styles";
import { profile } from "../constants/data";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <div
      id="about"
      className={`${styles.paddingX} ${styles.paddingY} bg-background w-full mx-auto clip-path-[polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%)]`}
    >
      <div
        id="left"
        className="flex justify-center relative max-w-7xl mx-auto "
      >
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-3 w-full max-w-7xl">
          <div className="absolute flex justify-end right-0 bottom-0 overflow-hidden w-full h-full">
            <HeroBgAnimation />
          </div>
          <div className="w-full bg-slate-400 z-10">
            <p>Hi, I am</p>
            {/* <br /> */}
            <p>{profile.name}</p>
            <span>
              I am a &nbsp;
              <span>
                <Typewriter
                  options={{
                    strings: profile.roles,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </span>
            <p>{profile.description}</p>
            <div className="z-50">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  console.log("Button clicked!");
                  window.open(
                    profile.urls.resume,
                    "_blank",
                    "noopener,noreferrer"
                  );
                }}
                className="hover:text-black cursor-pointer text-white bg-green-300"
              >
                Check Resume
              </button>
            </div>
          </div>
          <div className="w-full bg-yellow-300 z-10"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
