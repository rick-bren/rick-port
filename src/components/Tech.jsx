import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { FaNode } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { motion } from "framer-motion";

// Animation configuration for each icon
const iconVariant = (delay) => ({
  initial: { y: 0 },
  animate: {
    y: [15, -15], // Moves up and down
    transition: {
      duration: 1,
      delay: delay,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Techn = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.5 }}
        className="text-4xl text-center my-20"
      >
        Frameworks and Tools
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }} // Corrected 'opactiy' to 'opacity'
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-10"
      >
        <motion.div
          className="rounded-2xl border-4 border-neutral-800 p-4"
          variants={iconVariant(0.3)}
          initial="initial"
          animate="animate"
        >
          <RiReactjsLine className="text-5xl text-[#61DAFB]" />
        </motion.div>
        <motion.div
          className="rounded-2xl border-4 border-neutral-800 p-4"
          variants={iconVariant(1.3)}
          initial="initial"
          animate="animate"
        >
          <FaNode className="text-5xl text-[#8CC84B]" />
        </motion.div>
        <motion.div
          className="rounded-2xl border-4 border-neutral-800 p-4"
          variants={iconVariant(0.6)}
          initial="initial"
          animate="animate"
        >
          <SiExpress className="text-5xl" />
        </motion.div>
        <motion.div
          className="rounded-2xl border-4 border-neutral-800 p-4"
          variants={iconVariant(1.6)}
          initial="initial"
          animate="animate"
        >
          <SiTailwindcss className="text-5xl text-[#06B6D4]" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Techn;
