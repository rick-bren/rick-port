import { GiHidden } from "react-icons/gi";
import me from "../assets/ken10 (1) (2).png";
import resume from "../assets/rires.pdf";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const child = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Pics = () => {
  return (
    <div className="border-b border-neutral-800 p-4 lg:mb-35 pt-10 lg:pt-20">
      <div className="flex flex-wrap mb-10 lg:mb-20">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="w-full lg:w-1/2 flex flex-col items-center lg:items-start lg:pl-40"
        >
          <motion.h1
            variants={child(0.5)}
            className="text-4xl lg:text-5xl font-semibold tracking-tight mt-10 lg:mt-16 text-center lg:text-left"
          >
            Rick Brenton K R
          </motion.h1>
          <motion.span
            variants={child(0.7)}
            className="bg-gradient-to-r from-violet-400 via-cyan-300 to-emerald-500 bg-clip-text text-transparent text-2xl lg:text-3xl tracking-tight mt-4"
          >
            Student
          </motion.span>
          <motion.p
            variants={child(0.9)}
            className="text-center lg:text-left text-base lg:text-lg my-4 lg:my-6 max-w-lg lg:max-w-full px-6 lg:px-0"
          >
            I'm Rick Brenton, a 20-year-old Chennai-based developer currently
            pursuing my Computer Science and Engineering degree at SRM.
          </motion.p>
          <motion.div variants={child(1.2)} className="mt-6 lg:mt-10">
            <a
              href={resume}
              download="Rick_Brenton_Resume"
              className="inline-block bg-gradient-to-r from-violet-300 via-cyan-300 to-emerald-600 text-black px-4 py-2 text-sm lg:text-base font-medium rounded-full transition-transform duration-1 hover:scale-105"
            >
              Download My Resume
            </a>
          </motion.div>
        </motion.div>

        <div className="w-full lg:w-1/2 flex justify-center items-center mt-8 lg:mt-[-60px]">
          <motion.img
            initial={{ x: 800, opacity: 0.1 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.3, delay: 0.7 }}
            src={me}
            alt="Rick Brenton"
            className="rounded-2xl lg:w-[65%]"
          />
        </div>
      </div>
    </div>
  );
};

export default Pics;
