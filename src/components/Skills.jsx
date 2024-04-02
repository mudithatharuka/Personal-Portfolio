import React from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";
import { Tilt } from "react-tilt";
import SectionWrapper from "../hoc/SectionWrapper";
import { skills } from "../constants/data";

const SkillItem = ({ skillItem }) => (
  <div className="font-normal text-[14px] md:text-[16px] py-[6px] px-3 sm:py-2 md:py-3 md:px-4 flex items-center justify-center gap-2 rounded-xl text-txtPrimary border-solid border-[1px] border-txtTertiary">
    <img src={skillItem.image} alt={skillItem.name} className="w-6 h-6" />
    {skillItem.name}
  </div>
);

const SkillCard = ({ index, title, skills }) => (
  <Tilt>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full rounded-2xl border-solid border-[1px] shadow-[rgba(23,92,230,0.15)_0px_4px_24px] border-primary p-[1px]"
    >
      <div
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-slate-900 rounded-2xl max-w-[330px] sm:max-w-[400px] md:max-w-[500px] py-[10px] md:py-[18px] px-9"
      >
        <h2 className="text-[28px] font-semibold mb-5 text-center text-txtSecondary">
          {title}
        </h2>
        <div className="flex justify-center flex-wrap gap-3 mb-3">
          {skills.map((skillItem, index) => (
            <SkillItem key={index} skillItem={skillItem} />
          ))}
        </div>
      </div>
    </motion.div>
  </Tilt>
);

const Skills = () => {
  return (
    <div className={`${styles.paddingX} ${styles.paddingY} w-full mx-auto`}>
      <div className="max-w-7xl mx-auto">
        <motion.div variants={textVariant()} className="pb-5">
          <h2 className={`${styles.sectionHeadText}`}>Skills.</h2>
          <p className={`${styles.sectionSubText}`}>
            The toolbox I have been working on for the past 3 years
          </p>
        </motion.div>

        <div className="flex flex-wrap my-[30px] gap-y-12 gap-x-14 justify-center">
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
