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
import "react-vertical-timeline-component/style.min.css";
import HeroImg from "../assets/react.svg";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      date={experience?.date}
      contentStyle={{
        background: "transparent",
        color: "rgba(var(--txtPrimary))",
        border: "1px solid rgba(var(--primary))",
        borderRadius: "10px",
        boxShadow: "rgba(var(--boxShadow1)) 0px 4px 24px",
      }}
      contentArrowStyle={{ borderRight: "10px solid rgba(var(--primary))" }}
      iconStyle={{
        background: "rgba(var(--cardBackground1))",
        boxShadow:
          "0 0 0 2px rgba(var(--primary)), inset 0 2px 0 rgba(0,0,0,.08), 0 3px 0 4px rgba(0,0,0,.05)",
      }}
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
        <h4 className="font-medium text-[12px] text-txtSecondary md:text-[14px]">
          {experience?.companyName}&nbsp;&nbsp;|&nbsp;&nbsp;
          <span>{experience?.location}</span>
        </h4>
        <h4 className="font-normal text-[10px] text-txtSecondary md:text-[12px] md:hidden">
          {experience?.date}
        </h4>
      </div>
      <ul className="mt-5 mb-3 ml-5 list-disc space-y-2">
        {experience?.points?.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="pl-1 text-white-100 tracking-wide font-normal text-txtPrimary text-[12px] md:text-[14px]"
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

        <div className="flex flex-col">
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
