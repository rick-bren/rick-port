import { FaFacebook } from "react-icons/fa";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJs,
  faPython,
  faCss3Alt,
  faHtml5,
} from "@fortawesome/free-brands-svg-icons";
import { SiMongodb } from "react-icons/si";
import { DiMysql } from "react-icons/di";
import { motion } from "framer-motion";

const Left1 = (x) => ({
  initial: { x: x, opacity: 0 },
  animate: { x: 0, opacity: 1 },
});
const SkillAni = (width) => ({
  initial: { width: 0, opacity: 0 },
  animate: { width: `${width}%`, opacity: 1 },
});

const Skills = () => {
  return (
    <div id="skills" className="border-b border-neutral-800 pb-4">
      <motion.h2
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.5 }}
        className="text-4xl text-center my-20"
      >
        Skills
      </motion.h2>
      <div className="flex flex-col w-[90%] mx-auto lg:gap-20">
        <div className="flex flex-col lg:flex-row lg:gap-[200px] gap-7 justify-center items-center mb-8">
          <motion.div
            className="flex flex-row gap-4 lg:items-center"
            variants={Left1(-100)}
            initial="initial"
            whileInView="animate"
            transition={{ duration: 1.5 }}
          >
            <FontAwesomeIcon
              icon={faPython}
              className="text-[#FFD43B] w-[50px] h-[50px]"
            />
            <div className="border rounded-full lg:w-[400px] w-[300px] h-[40px] overflow-hidden">
              <motion.div
                className="rounded-full h-full bg-gradient-to-r from-[#072142] via-[#8c2b7a] to-[#ff4d5a] flex items-center"
                whileInView={{ width: "75%", opacity: 1 }} // Animate on view
                initial={{ width: 0, opacity: 0 }}
                transition={{ duration: 1.5 }}
              >
                <span className="text-white pl-3">Python</span>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-row gap-4 items-center"
            variants={Left1(100)}
            initial="initial"
            whileInView="animate"
            transition={{ duration: 1.5 }}
          >
            <FontAwesomeIcon
              icon={faHtml5}
              className="text-[#E34F26] w-[50px] h-[50px]"
            />
            <div className="border rounded-full lg:w-[400px] w-[300px] h-[40px] overflow-hidden">
              <motion.div
                className="rounded-full h-full bg-gradient-to-r from-[#072142] via-[#8c2b7a] to-[#ff4d5a] flex items-center"
                whileInView={{ width: "80%", opacity: 1 }} // Animate on view
                initial={{ width: 0, opacity: 0 }}
                transition={{ duration: 1.5 }}
              >
                <span className="text-white pl-3">HTML</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <div className="flex flex-col lg:flex-row lg:gap-[200px] gap-7 justify-center items-center mb-8">
          <motion.div
            className="flex flex-row gap-4 items-center"
            variants={Left1(-100)}
            initial="initial"
            whileInView="animate"
            transition={{ duration: 1.5 }}
          >
            <FontAwesomeIcon
              icon={faCss3Alt}
              className="text-[#2965F1] w-[50px] h-[50px] hover:scale-125"
            />
            <div className="border rounded-full lg:w-[400px] w-[300px] h-[40px] overflow-hidden">
              <motion.div
                className="rounded-full h-full bg-gradient-to-r from-[#072142] via-[#8c2b7a] to-[#ff4d5a] flex items-center"
                whileInView={{ width: "65%", opacity: 1 }} // Animate on view
                initial={{ width: 0, opacity: 0 }}
                transition={{ duration: 1.5 }}
              >
                <span className="text-white pl-3">CSS</span>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-row gap-4 items-center"
            variants={Left1(100)}
            initial="initial"
            whileInView="animate"
            transition={{ duration: 1.5 }}
          >
            <FontAwesomeIcon
              icon={faJs}
              className="text-[#F7DF1E] w-[50px] h-[50px]"
            />
            <div className="border rounded-full lg:w-[400px] w-[300px] h-[40px] overflow-hidden">
              <motion.div
                className="rounded-full h-full bg-gradient-to-r from-[#072142] via-[#8c2b7a] to-[#ff4d5a] flex items-center"
                whileInView={{ width: "55%", opacity: 1 }} // Animate on view
                initial={{ width: 0, opacity: 0 }}
                transition={{ duration: 1.5 }}
              >
                <span className="text-white pl-3">JavaScript</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <div className="flex flex-col lg:flex-row lg:gap-[200px] gap-7 justify-center items-center mb-8">
          <motion.div
            variants={Left1(-100)}
            initial="initial"
            whileInView="animate"
            transition={{ duration: 1.5 }}
            className="flex flex-row gap-4 lg:items-center"
          >
            <DiMysql className="h-[50px] w-[50px] text-[#00758F]" />
            <div className="border rounded-full lg:w-[400px] w-[300px] h-[40px] overflow-hidden">
              <motion.div
                className="rounded-full h-full bg-gradient-to-r from-[#072142] via-[#8c2b7a] to-[#ff4d5a] flex items-center"
                whileInView={{ width: "70%", opacity: 1 }} // Animate on view
                initial={{ width: 0, opacity: 0 }}
                transition={{ duration: 1.5 }}
              >
                <span className="text-white pl-3">SQL</span>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            variants={Left1(100)}
            initial="initial"
            whileInView="animate"
            transition={{ duration: 1.5 }}
            className="flex flex-row gap-4 items-center"
          >
            <SiMongodb className="w-[50px] h-[50px] text-[#4DB33D]" />
            <div className="border rounded-full lg:w-[400px] w-[300px] h-[40px] overflow-hidden">
              <motion.div
                className="rounded-full h-full bg-gradient-to-r from-[#072142] via-[#8c2b7a] to-[#ff4d5a] flex items-center"
                whileInView={{ width: "60%", opacity: 1 }} // Animate on view
                initial={{ width: 0, opacity: 0 }}
                transition={{ duration: 1.5 }}
              >
                <span className="text-white pl-3">MongoDB</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
