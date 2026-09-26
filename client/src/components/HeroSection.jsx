import React from "react";
import { motion } from "framer-motion";
import BgDesktop from "../images/hero-section-bg.png";
import BgMobile from "../images/hero-section-bg-mobile.png"; // add mobile image

const HeroSection = () => {
  return (
    <section
      className="relative bg-cover bg-center min-h-[80vh] py-32 px-6 md:px-12 text-white"
      style={{
        backgroundImage: `url(${BgDesktop})`,
      }}
    >
      {/* Mobile background override */}
      <div
        className="absolute inset-0 bg-cover bg-center md:hidden"
        style={{
          backgroundImage: `url(${BgMobile})`,
        }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative max-w-2xl z-10">
        <motion.h1
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-bold leading-tight"
        >
          From <span className="text-yellow-400">Learning</span> to{" "}
          <span className="text-yellow-400">Earning</span> — Start Your{" "}
          <span className="text-yellow-400">Journey</span> Today
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-4 text-lg text-gray-200 max-w-xl"
        >
          We provide industry-focused training in IT, business, and creative
          skills — helping you build a career with confidence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 flex flex-wrap gap-4"
        >
          <button className="bg-yellow-400 cursor-pointer text-black px-6 py-3 shadow rounded-full hover:bg-yellow-500">
            View Courses
          </button>
          <button className="bg-[#253238] cursor-pointer text-white border border-gray-200 px-6 py-3 rounded-full hover:bg-transparent hover:text-white hover:border-white">
            Enroll Now
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;