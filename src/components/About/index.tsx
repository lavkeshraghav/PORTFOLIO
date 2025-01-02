import React from "react";
import profile from "../../../public/images/profile.jpg";
import Image from "next/image";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const Index = () => {
  return (
    <>
      <div className="mt-[5rem] md:ml-[8rem] md:mr-[8rem] h-[80vh] md:flex justify-center items-center">
        <div className="flex md:justify-between justify-center p-5 md:flex-row flex-col">
          {/* Profile Image with Motion */}
          <motion.div
            className="md:block flex justify-center items-center md:w-[50%] w-[100%]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.1 }}
          >
            <Image
              src={profile}
              alt="profile"
              width={300}
              height={300}
              className="rounded-full"
            />
          </motion.div>

          {/* Text Content with Motion */}
          <motion.div
            className="md:w-[50%] w-[100%] flex-col"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <p className="text-blue-500 font-bold text-[35px]">
              Hey, I am a<br /> software developer
            </p>
            <p
              style={{
                lineHeight: "2",
                fontSize: "22px",
                marginBottom: "5px",
                marginTop: "5px",
              }}
            >
              I can help you solve a problem, build a project, or grow an
              existing project.
            </p>
            <p>
              <a
                href="https://wa.me/7505786956"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline hover:text-blue-700"
              >
                Let's chat at 7505786956
              </a>
            </p>
            <motion.button
              className="bg-gradient-to-r from-blue-400 to-blue-600 text-[#fff] p-2 rounded-[5px] mt-3 transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-600"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              DOWNLOAD CV
            </motion.button>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Index;
