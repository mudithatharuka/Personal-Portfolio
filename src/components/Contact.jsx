import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import SectionWrapper from "../hoc/SectionWrapper";
import { slideIn } from "../utils/motion";
import EarthCanvas from "./canvas/Earth";

const Contact = () => {
  return (
    <div className={`${styles.paddingX} ${styles.paddingY} w-full mx-auto`}>
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row md:gap-8 overflow-hidden">
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="pb-5"
        >
          <h2 className={`${styles.sectionHeadText}`}>Contact.</h2>
          <p className={`${styles.sectionSubText}`}>Get in touch with me.</p>
        </motion.div>
        <motion.div>
          <EarthCanvas />
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
