import React from "react";
import SectionWrapper from "../hoc/SectionWrapper";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { education } from "../constants/data";

const EducationCard = ({ education }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "transparent",
        color: "rgba(var(--txtPrimary))",
        border: "1px solid rgba(var(--primary))",
        borderRadius: "10px",
        boxShadow: "rgba(var(--boxShadow1)) 0px 4px 24px",
      }}
      contentArrowStyle={{ borderLeft: "10px solid rgba(var(--primary))" }}
      iconStyle={{
        background: "rgba(var(--cardBackground1))",
        boxShadow:
          "0 0 0 2px rgba(var(--primary)), inset 0 2px 0 rgba(0,0,0,.08), 0 3px 0 4px rgba(0,0,0,.05)",
      }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={education?.img}
            alt={education?.school}
            className="w-5 h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="font-semibold text-[14px] text-txtPrimary md:text-[18px]">
          {education?.school}
        </h3>
        <h4 className="font-medium text-[12px] text-txtSecondary md:text-[14px]">
          {education?.degree}
        </h4>
        {/* <h4 className="font-normal text-[11px] text-txtSecondary md:text-[13px]">
          {education?.location}
        </h4> */}
        <h4
          className={`font-normal text-[10px] text-txtSecondary md:text-[12px]`}
        >
          {education?.date}
        </h4>
      </div>
      <p>{education.desc}</p>
    </VerticalTimelineElement>
  );
};

const Education = () => {
  return (
    <div className={`${styles.paddingX} ${styles.paddingY} w-full mx-auto`}>
      <div className="max-w-7xl mx-auto">
        <motion.div variants={textVariant()} className="pb-5">
          <h2 className={`${styles.sectionHeadText}`}>Education.</h2>
          <p className={`${styles.sectionSubText}`}>
            My education journey of growing this far with self-discovery.
          </p>
        </motion.div>

        {/* <div className="mr-[11%] md:ml-[7.5%] md:mr-[14.5%]"> */}
        <div className="ml-[11%] md:mr-[7.5%] md:ml-[14.5%]">
          {/* <div className="mx-[8%] md:mx-[14.5%]"> */}
          <VerticalTimeline layout="1-column-right">
            {education?.map((education, index) => (
              <EducationCard key={`education-${index}`} education={education} />
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Education, "education");
