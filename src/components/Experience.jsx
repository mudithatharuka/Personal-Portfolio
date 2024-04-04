import React from "react";
import { styles } from "../styles";
import { experiences } from "../constants/data";
import SectionWrapper from "../hoc/SectionWrapper";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import HeroImg from "../assets/react.svg";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "var(cardBackground2)",
        color: "var(txtPrimary)",
      }}
      contentArrowStyle={{ borderRight: "7px solid var(primary)" }}
      iconStyle={{ background: experience?.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={HeroImg}
            alt={experience?.companyName}
            className="w-5 h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="font-semibold text-[14px] text-txtPrimary md:text-[18px]">
          {experience?.title}
        </h3>
        <p className="font-medium text-[12px] text-txtSecondary md:text-[14px]">
          {experience?.companyName}&nbsp;&nbsp;|&nbsp;&nbsp;
          <span>{experience?.location}</span>
        </p>
        <p className="font-normal text-[10px] text-txtSecondary md:text-[12px]">
          {experience?.date}
        </p>
      </div>
      <ul className="mt-5 mb-3 ml-5 font-normal text-txtPrimary txt-[12px] md:txt-[14px] list-disc space-y-2">
        {experience?.points?.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="pl-1 text-white-100 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <div className={`${styles.paddingX} ${styles.paddingY} w-full mx-auto`}>
      <div className="max-w-7xl mx-auto">
        <motion.div variants={textVariant()} className="pb-5">
          <h2 className={`${styles.sectionHeadText}`}>Work Experience.</h2>
          <p className={`${styles.sectionSubText}`}>
            My journey so far in my professional life.
          </p>
        </motion.div>

        <div className="mt-20 flex flex-col">
          <VerticalTimeline>
            {experiences?.map((experience, index) => (
              <ExperienceCard
                key={`experience-${index}`}
                experience={experience}
              />
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Experience, "experience");
