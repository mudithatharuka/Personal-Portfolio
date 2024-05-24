import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import SectionWrapper from "../hoc/SectionWrapper";
import { slideIn, textVariant } from "../utils/motion";
import emailjs from "@emailjs/browser";
import EarthCanvas from "./canvas/Earth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.PERSONAL_PORTFOLIO_EMAILJS_SERVICE_ID,
        import.meta.env.PERSONAL_PORTFOLIO_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Muditha",
          from_email: form.email,
          to_email: "mudithatharuka@gmail.com",
          message: form.message,
        },
        import.meta.env.PERSONAL_PORTFOLIO_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className={`${styles.paddingX} ${styles.paddingY} w-full mx-auto`}>
      <div className="max-w-7xl mx-auto">
        <motion.div variants={textVariant()} className="pb-5">
          <h2 className={`${styles.sectionHeadText}`}>Contact.</h2>
          <p className={`${styles.sectionSubText}`}>Get in touch with me.</p>
        </motion.div>
        <div className="flex flex-col-reverse lg:flex-row lg:gap-8 overflow-hidden justify-center py-[30px]">
          <motion.div
            variants={slideIn("left", "tween", 0.2, 1)}
            className="p-8 rounded-2xl bg-cardBackground1 min-w-[470px] shadow-[rgba(0,0,0,0.4)_0px_4px_15px]"
          >
            <form ref={formRef} className="my-4 flex flex-col gap-6">
              <h3 className="text-[16px] md:text-[18px] mb-[6px] font-semibold text-txtPrimary">
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
                  onChange={handleChange}
                  placeholder="What's your name?"
                  className="bg-inputBackground1 py-4 px-6 placeholder:text-txtTertiary text-txtSecondary rounded-lg outline-none border-none text-[14px] md:text-[16px]"
                />
              </label>
              <label className="flex flex-col">
                <span className="font-medium text-txtPrimary text-[14px] md:text-[16px] mb-4">
                  Your Email
                </span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="What's your name?"
                  className="bg-inputBackground1 py-4 px-6 placeholder:text-txtTertiary text-txtSecondary rounded-lg outline-none border-none text-[14px] md:text-[16px]"
                />
              </label>
              <label className="flex flex-col">
                <span className="font-medium text-txtPrimary text-[14px] md:text-[16px] mb-4">
                  Your Message
                </span>
                <textarea
                  aria-expanded={false}
                  rows={5}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="What's your name?"
                  className="resize-none bg-inputBackground1 py-4 px-6 placeholder:text-txtTertiary text-txtSecondary rounded-lg outline-none border-none text-[14px] md:text-[16px]"
                />
              </label>
              <button
                type="submit"
                className={`${styles.padding} button-gradient btn-gradient mt-2 w-[100%] text-center text-white rounded-lg cursor-pointer font-semibold text-[14px] md:text-[16px]`}
                onClick={handleSubmit}
              >
                {loading ? "Sending..." : "Send"}
              </button>
            </form>
          </motion.div>
          <motion.div
            variants={slideIn("right", "tween", 0.2, 1)}
            // className="sm:w-[550px] w-[350px]"
          >
            <div className="lg:w-[400px] sm:h-[550px] h-[350px] items-center">
              <EarthCanvas />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
