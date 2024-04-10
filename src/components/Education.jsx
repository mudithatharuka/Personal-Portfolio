import React from "react";
import SectionWrapper from "../hoc/SectionWrapper";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";

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

        {/* <div className={isOneCol ? "mr-[11%] md:ml-[7.5%] md:mr-[14.5%]" : ""}>
      <VerticalTimeline>
        {experiences?.map((experience, index) => (
          <ExperienceCard
            key={`experience-${index}`}
            experience={experience}
            isOneCol={isOneCol}
          />
        ))}
      </VerticalTimeline>
    </div> */}
      </div>
    </div>
  );
};

export default SectionWrapper(Education, "education");
