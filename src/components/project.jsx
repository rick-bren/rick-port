import React from "react";
import port from "../assets/projects/port1.gif";
import ipod from "../assets/projects/ipod1.gif";
import yolo from "../assets/projects/yolo8.gif";
import bus from "../assets/projects/bus1.gif";
import gym from "../assets/projects/kengym.gif";
import { motion } from "framer-motion";
const Right1 = (x) => ({
  hidden: { opacity: 0, x: x },
  visible: { x: 0, opacity: 1 },
});
const Proj = () => {
  return (
    <div
      id="projects"
      className="border-b border-neutral-800 pb-4 lg:p-0 pl-2 pr-2"
    >
      <motion.h2
        className="text-4xl text-center my-20"
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Projects
      </motion.h2>
      <div className="mb-8 flex flex-wrap lg:justify-center">
        <motion.div
          variants={Right1(-100)}
          whileInView="visible"
          initial="hidden"
          transition={{ duration: 1.5 }}
          className="w-full lg:w-1/4"
        >
          <img
            src={port}
            alt="port"
            className="w-[150px] h-[150px] mb-6 rounded mx-auto lg:mx-0"
          />
        </motion.div>
        <motion.div
          variants={Right1(100)}
          whileInView="visible"
          initial="hidden"
          transition={{ duration: 1.5 }}
          className="w-full max-w-xl lg:w-3/4"
        >
          <h6 className="mb-2 font-semibold cursor-pointer hover:text-bold">
            <a href="">Portfolio</a>
          </h6>
          <p className="mb-4 text-neutral-400">
            Built a Portfolio to showcase my skills and projects using react js.
            The Project contains a navigation bar, about me , skills projects ,
            education and contact me sections. to add movements framer library
            has been used.
          </p>
          <span className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800 ">
            React.Js
          </span>
          <span className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">
            Tail Wind CSS
          </span>
          <span className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">
            Framer Motion
          </span>
        </motion.div>
      </div>

      <div className="mb-8 flex flex-wrap lg:justify-center">
        <motion.div
          variants={Right1(-100)}
          whileInView="visible"
          initial="hidden"
          transition={{ duration: 1.5 }}
          className="w-full lg:w-1/4"
        >
          <img
            src={gym}
            alt="port"
            className="w-[150px] h-[150px] mb-6 rounded mx-auto lg:mx-0"
          />
        </motion.div>
        <motion.div
          variants={Right1(100)}
          whileInView="visible"
          initial="hidden"
          transition={{ duration: 1.5 }}
          className="w-full max-w-xl lg:w-3/4"
        >
          <h6 className="mb-2 font-semibold cursor-pointer hover:font-light">
            <a href="https://github.com/rick-bren/gymapprick" target="_blank">
              Gym app using API
            </a>
          </h6>
          <p className="mb-4 text-neutral-400">
            Using ExercisedDB api from rapid-API and material UI framework
            developed a gym details web app that gives clear deatails on
            different exercises
          </p>
          <span className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800 ">
            Materi UI
          </span>
          <span className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">
            ExerciseDB API
          </span>
        </motion.div>
      </div>
      <div className="mb-8 flex flex-wrap lg:justify-center">
        <motion.div
          variants={Right1(-100)}
          whileInView="visible"
          initial="hidden"
          transition={{ duration: 1.5 }}
          className="w-full lg:w-1/4"
        >
          <img
            src={yolo}
            alt="port"
            className="w-[150px] h-[150px] mb-6 rounded mx-auto lg:mx-0"
          />
        </motion.div>
        <motion.div
          variants={Right1(100)}
          whileInView="visible"
          initial="hidden"
          transition={{ duration: 1.5 }}
          className="w-full max-w-xl lg:w-3/4"
        >
          <h6 className="mb-2 font-semibold hover:font-bold">
            <a
              href="https://github.com/rick-bren/dataset_underwater "
              target="_blank"
            >
              Under Water Object Detection
            </a>
          </h6>
          <p className="mb-4 text-neutral-400">
            Using roboflow plotted down axises and created a custom data set for
            underwater tash and object detection with 15 classes. Trained these
            images with yolo v8 algorithm and applied Non maximum supression to
            optimize the results. This model reached recall value of 1 and
            accuracy of 0.94
          </p>
          <span className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800 ">
            Python
          </span>
          <span className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800 ">
            Yolo v8
          </span>
          <span className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800 ">
            Non Maximum Supression
          </span>
        </motion.div>
      </div>
      <div className="mb-8 flex flex-wrap lg:justify-center">
        <motion.div
          variants={Right1(-100)}
          whileInView="visible"
          initial="hidden"
          transition={{ duration: 1.5 }}
          className="w-full lg:w-1/4"
        >
          <img
            src={bus}
            alt="port"
            className="w-[150px] h-[150px] mb-6 rounded mx-auto lg:mx-0"
          />
        </motion.div>
        <motion.div
          variants={Right1(100)}
          whileInView="visible"
          initial="hidden"
          transition={{ duration: 1.5 }}
          className="w-full max-w-xl lg:w-3/4"
        >
          <h6 className="mb-2 font-semibold cursor-pointer hover:font-light">
            <a href="https://github.com/rick-bren/Ken-Bus" target="_blank">
              Bus Booking System
            </a>
          </h6>
          <p className="mb-4 text-neutral-400">
            Using Python and csv Library build a bus booking system that allows
            a user to create an account, log in, book busses with a seat of
            their choice if avaliable
          </p>
          <span className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800 ">
            Python
          </span>
          <span className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">
            CSV
          </span>
        </motion.div>
      </div>
      <div className="mb-8 flex flex-wrap lg:justify-center">
        <motion.div
          variants={Right1(-100)}
          whileInView="visible"
          initial="hidden"
          transition={{ duration: 1.5 }}
          className="w-full lg:w-1/4"
        >
          <img
            src={ipod}
            alt="port"
            className="w-[150px] h-[150px] mb-6 rounded mx-auto lg:mx-0"
          />
        </motion.div>
        <motion.div
          variants={Right1(100)}
          whileInView="visible"
          initial="hidden"
          transition={{ duration: 1.5 }}
          className="w-full max-w-xl lg:w-3/4"
        >
          <h6 className="mb-2 font-semibold hover:font-light">
            <a href="https://github.com/rick-bren/Ken_Ipod" target="_blank">
              IPOD
            </a>
          </h6>
          <p className="mb-4 text-neutral-400">
            Created an interface similar to an ipod using react js, where an
            user can play pause and skip songs and has options to pick
            wallpapers as well
          </p>
          <span className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800 ">
            React.Js
          </span>
          <span className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">
            Tail Wind CSS
          </span>
        </motion.div>
      </div>
    </div>
  );
};

export default Proj;
