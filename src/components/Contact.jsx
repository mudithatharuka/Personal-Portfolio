import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import SectionWrapper from "../hoc/SectionWrapper";
import { slideIn, textVariant } from "../utils/motion";
import EarthCanvas from "./canvas/Earth";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  return (
    <div className={`${styles.paddingX} ${styles.paddingY} w-full mx-auto`}>
      <div className="max-w-7xl mx-auto">
        <motion.div variants={textVariant()} className="pb-5">
          <h2 className={`${styles.sectionHeadText}`}>Contact.</h2>
          <p className={`${styles.sectionSubText}`}>Get in touch with me.</p>
        </motion.div>
        <div className="flex flex-col-reverse lg:flex-row lg:gap-8 overflow-hidden justify-center my-[30px]">
          <motion.div
            variants={slideIn("left", "tween", 0.2, 1)}
            className="p-8 rounded-2xl bg-cardBackground1 min-w-[500px]"
          >
            <form ref={formRef} className="my-5 flex flex-col gap-8">
              <h3 className="text-6 mb-[6px] font-semibold text-txtPrimary">
                Email Me 🚀
              </h3>
              <label className="flex flex-col">
                <span className="font-medium text-txtPrimary text-[14px] md:text-[16px] mb-4">
                  Your Name
                </span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  placeholder="What's your name?"
                  className="bg-altBackground py-4 px-6 placeholder:text-txtTertiary text-txtMain rounded-lg outline-none border-none text-[14px] md:text-[16px]"
                />
              </label>
              <label className="flex flex-col">
                <span className="font-medium text-txtPrimary text-[14px] md:text-[16px] mb-4">
                  Your Email
                </span>
                <input
                  type="email"
                  name="email"
                  value={form.name}
                  placeholder="What's your name?"
                  className="bg-altBackground py-4 px-6 placeholder:text-txtTertiary text-txtMain rounded-lg outline-none border-none text-[14px] md:text-[16px]"
                />
              </label>
              <label className="flex flex-col">
                <span className="font-medium text-txtPrimary text-[14px] md:text-[16px] mb-4">
                  Your Message
                </span>
                <textarea
                  aria-expanded={false}
                  rows={7}
                  name="message"
                  value={form.name}
                  placeholder="What's your name?"
                  className="bg-altBackground py-4 px-6 placeholder:text-txtTertiary text-txtMain rounded-lg outline-none border-none text-[14px] md:text-[16px]"
                />
              </label>
            </form>
          </motion.div>
          <motion.div
            variants={slideIn("right", "tween", 0.2, 1)}
            className="lg:w-auto sm:h-[550px] h-[350px]"
          >
            <EarthCanvas />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
