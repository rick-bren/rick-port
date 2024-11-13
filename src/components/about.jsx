import tech from "../assets/idk.jpg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-700 pb-10">
      <motion.h2
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl text-center my-20"
      >
        About
        <span className="text-neutral-500"> Me</span>
      </motion.h2>

      <div className="flex flex-wrap justify-center lg:justify-between items-center mb-24 lg:px-10 px-4 gap-[-100px]">
        <p className="text-center lg:text-left text-lg leading-relaxed lg:leading-loose lg:pl-[100px] lg:pr-[100px]">
          A highly motivated individual, I am a passionate web application
          developer with a solid foundation in Python and experience in
          frameworks and tools like React.js, Node.js, Framer Motion, and
          Tailwind CSS. I enjoy creating seamless, interactive, and visually
          engaging applications while continuously expanding my technical
          skills. My versatility allows me to adapt to various challenges, and I
          am committed to contributing effectively in diverse environments.
        </p>
      </div>
    </div>
  );
};

export default About;
