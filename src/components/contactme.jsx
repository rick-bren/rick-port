import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const Contactme = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    emailjs
      .sendForm(
        "service_vu3o1ep",
        "template_dors841",
        form.current,
        "FuXzs4WLEMYE0RpH_"
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          setMessage("Email sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log("Email send error:", error.text);
          setMessage("Message failed to send pls try again:");
        }
      )
      .finally(() => {
        setLoading(false);
        setTimeout(() => setMessage(""), 5000);
      });
  };

  return (
    <div id="contact-me" className="border-b border-neutral-900 pb-24">
      <motion.h2
        className="text-center text-4xl my-20"
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Contact Me
      </motion.h2>
      <div className="flex flex-col md:flex-row justify-center">
        <div className="w-full lg:w-[65%] p-4">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="w-full lg:mx-auto lg:w-[80%] bg-[#F0F8FF] lg:p-6 p-3 rounded-[24px] "
          >
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-2xl text-gray-800"
              >
                Your Name
              </label>
              <input
                type="text"
                id="text"
                name="user_name"
                className="shadow-sm mb-10 bg-gray-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Name"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-2xl text-gray-800"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="user_email"
                className="block p-3 w-full mb-10 text-sm text-gray-900 bg-gray-300 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Youremail@email.com"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-2xl font-medium text-gray-800"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="6"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-300 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-primary-500 resize-none"
                placeholder="Leave a comment..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="mt-5 py-3 px-5 text-sm font-medium text-center text-white rounded-full bg-slate-800"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
          {message && (
            <p className="mt-4 text-2xl text-center text-green-600 dark:text-green-400">
              {message}
            </p>
          )}
        </div>
        <div className="w-full md:w-[65%] flex justify-center mt-4 md:mt-[70px]">
          <div className="w-full lg:w-[70%]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d242.94500385085357!2d80.26271765084147!3d13.028025574430508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTPCsDAxJzQwLjciTiA4MMKwMTUnNDUuOSJF!5e0!3m2!1sen!2sin!4v1730124071809!5m2!1sen!2sin"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              className="w-full h-[500px] lg:h-[90%] p-4 lg:p-0 lg:rounded-2xl"
            ></iframe>
          </div>
        </div>
      </div>
      <div className=" text-center tracking-tighter text-slate-600">
        <p className="my-4">brenton4204@gmail.com</p>
        <p className="my-4">9499038527</p>
      </div>
    </div>
  );
};

export default Contactme;
