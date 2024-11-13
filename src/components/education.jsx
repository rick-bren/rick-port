import React from "react";

import { motion } from "framer-motion";
const Right1 = (x) => ({
  hidden: { opacity: 0, x: x },
  visible: { x: 0, opacity: 1 },
});

const EDU = () => {
  return (
    <div className="border-b border-neutral-800 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl text-center my-20"
      >
        Education
      </motion.h2>
      <div>
        <div className="mb-8 flex flex-wrap lg:justify-center pl-3">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ x: -100, opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="w-full lg:w-1/4 "
          >
            <p className="mb-2 text-sm text-neutral-400">2018-2021</p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ x: 100, opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="w-full max-w-xl lg:w-3/4"
          >
            <h6 className="mb-2 font-semibold">
              School -<span className="text-purple-100"> St Bedes Academy</span>
            </h6>
            <p className="mt-3">
              I completed my 10th and 12th grade with a focus on PCMC (Physics,
              Chemistry, Mathematics, and Computer Science). This combination
              gave me a solid foundation in science and technology, which
              sparked my passion for computer science. In addition to academics,
              I actively participated in various extracurricular activities,
              including music and chess, which helped me develop skills in
              creativity, strategy, and discipline.
            </p>
            <span className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">
              Physics
            </span>

            <span className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">
              Chemistry
            </span>
            <span className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">
              Math
            </span>
            <span className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">
              Computer Science
            </span>
          </motion.div>
        </div>
      </div>
      <div>
        <div className="mb-8 flex flex-wrap lg:justify-center pl-3">
          <motion.div
            variants={Right1(-100)}
            whileInView="visible"
            initial="hidden"
            transition={{ duration: 1.5 }}
            className="w-full lg:w-1/4"
          >
            <p className="mb-2 text-sm text-neutral-400">2021-present</p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ x: 100, opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="w-full max-w-xl lg:w-3/4"
          >
            <h6 className="mb-2 font-semibold">
              UG -<span className="text-purple-100"> SRM IST KTR</span>
            </h6>
            <p className="mt-3">
              I started my undergraduate degree in Computer Science in 2021 and
              expect to graduate in 2025. During my studies, I’ve completed
              important courses like Data Structures and Algorithms, Design
              Analysis of Algorithms, Information Storage and Management, Data
              Mining and Analysis, Object-Oriented Programming, Software
              Engineering and Project Management, Distributed Operating Systems,
              and Network Security. These courses have given me a strong
              foundation in both the theory and practical aspects of CS.
            </p>
            <span className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">
              DSA
            </span>
            <span className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800 ">
              Networks
            </span>
            <span className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">
              OOPS
            </span>
            <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">
              DBMS
            </span>
            <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">
              OS
            </span>
            <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">
              Network Security
            </span>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default EDU;
