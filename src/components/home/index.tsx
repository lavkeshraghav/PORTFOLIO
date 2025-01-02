import React from "react";
import { motion } from "framer-motion";
import profile from "../../../public/images/profile.jpg";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";

const Index = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 50, damping: 10 },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.1,
      transition: { duration: 0.3 },
    },
  };

  return (
    <>
      <motion.div
        className="mt-[5rem] md:ml-[8rem] md:mr-[8rem] h-[55vh] md:flex justify-center items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex md:justify-between justify-center p-5 md:flex-row flex-col">
          <motion.div
            className="md:block flex justify-center items-center md:w-[50%] w-[100%]"
            variants={containerVariants}
          >
            <Image
              src={profile}
              alt="profile"
              width={300}
              height={300}
              className="rounded-full transform transition-transform duration-500 hover:scale-110"
            />
          </motion.div>
          <motion.div
            className="md:w-[50%] w-[100%] flex justify-center items-center flex-col"
            variants={containerVariants}
          >
            <p className="font-bold text-[20px]">Anil Babu</p>
            <h1 className="mt-4 mb-4">
              <span className="text-blue-500 font-bold md:text-3xl">
                <Typewriter
                  words={[
                    "React js Developer!",
                    "Next.js Developer!",
                    "React native Developer!",
                    "Flutter Developer!",
                    "Express js Developer",
                  ]}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={100}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h1>
            <p style={{ lineHeight: "2", textAlign: "center", fontSize: "18px" }}>
              Every great app, website, or software you see started as an idea.
              Developers are the people who bring those ideas to life. It’s a
              job that’s as rewarding as it is challenging.
            </p>
            <motion.button
              className="bg-gradient-to-r from-blue-400 to-blue-600 text-[#fff] p-2 rounded-[5px] mt-3 transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-600"
              variants={buttonVariants}
              whileHover="hover"
            >
              DOWNLOAD CV
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default Index;
