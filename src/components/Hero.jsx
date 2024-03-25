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
      <div className="flex justify-center relative max-w-7xl mx-auto z-1 ">
        <div className="absolute flex justify-end right-0 bottom-0 overflow-hidden w-full h-full">
          <HeroBgAnimation />
        </div>
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-3 w-full max-w-7xl">
          <div className="w-full">
            <p>Hi, I am</p>
            {/* <br /> */}
            <p>{profile.name}</p>
            <span className="flex">
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
            <p
              onClick={() => {
                console.log("ghghjgj");
              }}
            >
              {profile.description}
            </p>
            <button
              onClick={() => {
                console.log("profile.urls.resume");
                window.open(
                  profile.urls.resume,
                  "_blank"
                  //   "noopener,noreferrer"
                );
              }}
              className="bg-blue-300"
            >
              Check Resume
            </button>
          </div>
          <div className="w-full bg-yellow-300"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
