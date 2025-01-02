import React from "react";
import profile from "../../../public/images/profile.jpg";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";

const Index = () => {
  return (
    <>
      <div className="mt-[5rem] md:ml-[8rem] md:mr-[8rem]  h-[80vh]  md:flex justify-center items-center ">
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
          <div className="md:w-[50%] w-[100%]  flex-col">
            <p className="text-blue-500 font-bold text-[35px]">
              Hey, I am a<br/> software developer
            </p>
            <p style={{ lineHeight: "2", fontSize: "22px",marginBottom:'5px',marginTop:"5px" }}>
              I can help you solve a problem , build a project or grow
              existing project.
            </p>
            <p>Let's chat at 7505786956</p>
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
