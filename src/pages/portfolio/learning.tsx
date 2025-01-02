import React from "react";
import Navbar from "@/components/Navbar/index";
import { Typewriter } from "react-simple-typewriter";
const Learning = () => {
  return (
    <>
      <Navbar />
      <div className="mt-[12rem]  h-[80vh]  md:mt-[5rem] md:ml-[8rem] md:mr-[8rem] mr-[1rem] ml-[1rem]  md:flex justify-center items-center">
        <h1 className="mt-4 mb-4">
          <span className="text-blue-500 font-bold md:text-3xl">
            <Typewriter
              words={["Coming soon study content!"]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h1>
      </div>
    </>
  );
};

export default Learning;
