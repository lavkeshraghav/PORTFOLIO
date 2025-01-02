import React from "react";
import profile from "../../../public/images/profile.jpg";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";

const Index = () => {
  return (
    <>
      <div className="mt-[5rem] md:ml-[8rem] md:mr-[8rem]  h-[55vh]  md:flex justify-center items-center ">
        <div className="flex md:justify-between justify-center p-5 md:flex-row flex-col">
          <div className=" md:block flex justify-center items-center md:w-[50%] w-[100%]">
            <Image
              src={profile}
              alt="profile"
              width={300}
              height={300}
              className="rounded-full transform transition-transform duration-500 hover:scale-110"
            />
          </div>
          <div className="md:w-[50%] w-[100%] flex justify-center items-center flex-col">
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
            <p style={{ lineHeight: "2", textAlign: "center",fontSize:'18px' }}>
              Every great app, website, or software you see started as an idea.
              Developers are the people who bring those ideas to life. It’s a
              job that’s as reward
            </p>
            <button className="bg-gradient-to-r from-blue-400 to-blue-600 text-[#fff] p-2 rounded-[5px] mt-3 transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-600">
              DOWNLOAD CV
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
