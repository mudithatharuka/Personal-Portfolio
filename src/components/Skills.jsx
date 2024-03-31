import React from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";
import { Tilt } from "react-tilt";
import SectionWrapper from "../hoc/SectionWrapper";
import { skills } from "../constants/data";

const SkillCard = ({ index, title, skills }) => (
  <Tilt className="sm:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full rounded-2xl border-solid border-[1px] shadow-[rgba(23,92,230,0.15)_0px_4px_24px] border-sky-500 p-[1px]"
    >
      <div
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-card rounded-2xl max-w-[330px] sm:max-w-[400px] lg:max-w-[500px] py-[10px] lg:py-[18px] px-9"
      >
        <h2 className="text-[28px] font-semibold mb-5 text-center text-txtSecondary">
          {title}
        </h2>
      </div>
    </motion.div>
  </Tilt>
);

const Skills = () => {
  return (
    <div className={`${styles.paddingX} ${styles.paddingY} w-full mx-auto`}>
      <div className="max-w-7xl mx-auto">
        <motion.div variants={textVariant()}>
          <h2 className={`${styles.sectionHeadText}`}>Skills.</h2>
          <p className={`${styles.sectionSubText}`}>
            The toolbox I have been working on for the past 3 years
          </p>
        </motion.div>

        <div className="w-full flex flex-wrap mt-[30px] gap-[30px] justify-center">
          {skills?.map((skill, index) => (
            <SkillCard
              key={skill.title}
              index={index}
              title={skill.title}
              skills={skill.skills}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Skills, "skills");
