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

  const handleNotify = (status, message) => {
    if (status == "Success") {
      toast.success(message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        className: "notif",
      });
    } else if (status == "Error") {
      toast.error(message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else if (status == "Warning") {
      toast.warn("Something Happened!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      toast.info("Info Notification!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  let handleEmailValidation = (email) => {
    let re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(email)) {
      return true;
    } else {
      return false;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name === undefined || form.name === "") {
      handleNotify("Error", "Please define Your Name!");
    } else if (form.email === undefined || form.email === "") {
      handleNotify("Error", "Please define Your Email!");
    } else if (!handleEmailValidation(form.email)) {
      handleNotify("Error", "Please enter a valid email address!");
    } else if (form.message === undefined || form.message === "") {
      handleNotify("Error", "Please write Your Message!");
    } else {
      setLoading(true);
      emailjs
        .send(
          import.meta.env.PERSONAL_PORTFOLIO_EMAILJS_SERVICE_ID,
          import.meta.env.PERSONAL_PORTFOLIO_EMAILJS_TEMPLATE_ID,
          {
            from_name: form.name,
            to_name: "Muditha",
            from_email: form.email,
            to_email: "mudithabatuwangala@gmail.com",
            message: form.message,
          },
          import.meta.env.PERSONAL_PORTFOLIO_EMAILJS_PUBLIC_KEY
        )
        .then(
          () => {
            setLoading(false);
            handleNotify(
              "Success",
              "Thank you! I will get back to you as soon as possible."
            );
            setForm({
              name: "",
              email: "",
              message: "",
            });
          },
          (error) => {
            setLoading(false);
            console.error(error);
            handleNotify(
              "Error",
              "Ahh, something went wrong! Please try again."
            );
          }
        );
    }
  };

  return (
    <div className={`${styles.paddingX} ${styles.paddingY} w-full mx-auto`}>
      <div className="max-w-7xl mx-auto">
        <motion.div variants={textVariant()} className="pb-5">
          <h2 className={`${styles.sectionHeadText}`}>Contact.</h2>
          <p className={`${styles.sectionSubText}`}>Get in touch with me.</p>
        </motion.div>
        <ToastContainer toastStyle={{ top: "80px" }} />
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
                  placeholder="What's your email?"
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
                  placeholder="Write your message"
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
