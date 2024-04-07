import React from "react";
import SectionWrapper from "../hoc/SectionWrapper";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";
import { projects } from "../constants/data";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import Tooltip from "@mui/material/Tooltip";
import { FaCode } from "react-icons/fa6";
import { TbWorldCode } from "react-icons/tb";

const ProjectCard = ({
  index,
  name,
  duration,
  description,
  tags,
  image,
  category,
  source_code_url,
  live_preview_url,
  members,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <div className="p-5 rounded-2xl duration-300 ease-in-out hover:top-[-13px] sm:w-[320px] w-full bg-cardBackground1 shadow-[rgba(0,0,0,0.4)_0px_4px_15px] hover:shadow-[rgba(var(--boxShadow1))_0px_10px_20px] transition-all relative top-0">
        <div className="relative w-full h-[200px] shadow-xl">
          <img
            src={image}
            alt={`${name}-projevt-image`}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="mt-5">
          <h3 className="font-semibold text-[14px] text-txtPrimary md:text-[18px] overflow-hidden">
            {name}
          </h3>
          <p className="font-normal text-[10px] text-txtTertiary md:text-[12px]">
            {duration}
          </p>
          <p className="text-white-100 font-normal text-txtSecondary text-[12px] md:text-[14px] mt-2">
            {description}
          </p>
          <div className="flex flex-wrap mt-4 mb-2 gap-y-2 gap-x-2">
            {tags?.map((tag, index) => (
              <p
                key={`${name}-tag-${index}`}
                className={`rounded-[15px] text-[8px] md:text-[10px] px-3 py-[2px] text-primary bg-gray-800`}
              >
                {tag.name}
              </p>
            ))}
          </div>
        </div>
        <div className="flex justify-between mt-3">
          <AvatarGroup max={4}>
            {members?.map((member, index) => (
              <Avatar
                key={`${name}-member-${index}`}
                sx={{
                  border: "2px solid rgba(var(--cardBackground1)) !important",
                }}
                alt="Remy Sharp"
                src={member.img}
              />
            ))}
          </AvatarGroup>
          <div className="flex gap-x-4 text-txtSecondary align-middle">
            <Tooltip title="View Source" arrow>
              <button className="transition-all hover:text-primary hover:scale-150 text-[18px]">
                <a href={source_code_url} target="_blank">
                  <FaCode />
                </a>
              </button>
            </Tooltip>
            <Tooltip title="Live Preview" arrow>
              <button className="transition-all hover:text-primary hover:scale-150">
                <a href={live_preview_url} target="_blank">
                  <TbWorldCode />
                </a>
              </button>
            </Tooltip>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <div className={`${styles.paddingX} ${styles.paddingY} w-full mx-auto`}>
      <div className="max-w-7xl mx-auto">
        <motion.div variants={textVariant()} className="pb-5">
          <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
          <p className={`${styles.sectionSubText}`}>
            The developments and the contributions of mine.
          </p>
        </motion.div>

        {/* <div className="w-full flex">
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            Following projects showcases my skills and experience through
            real-world examples of my work. Each project is briefly described
            with links to code repositories and live demos in it. It reflects my
            ability to solve complex problems, work with different technologies,
            and manage projects effectively.
          </motion.p>
        </div> */}

        <div className="flex flex-wrap my-[30px] gap-y-8 gap-x-6 justify-center">
          {projects?.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Projects, "projects");
