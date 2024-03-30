import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";

const SectionWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`mx-auto relative z-0`}
      >
        <span className="hash-span hidden" id={idName}>
          &nbsp;
        </span>
        <Component />
      </motion.section>
    );
  };
export default SectionWrapper;
