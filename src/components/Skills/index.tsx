import React from "react";
import { motion } from "framer-motion";

const Index = () => {
  const skills = [
    { name: "DevOps", proficiency: 10 },
    { name: "React js", proficiency: 90 },
    { name: "React Native", proficiency: 85 },
    { name: "Next.js", proficiency: 80 },
    { name: "Flutter", proficiency: 75 },
    { name: "Express.js", proficiency: 95 },
    { name: "Git", proficiency: 98 },
    { name: "Firebase", proficiency: 88 },
    { name: "PHP", proficiency: 65 },
    { name: "Laravel", proficiency: 60 },
  ];

  const barVariants = {
    hidden: { width: "0%" },
    visible: (custom:any) => ({
      width: `${custom}%`,
      transition: { duration: 1.2, ease: "easeInOut" },
    }),
  };

  return (
    <div className="mt-[16rem] md:mt-[5rem] md:ml-[8rem] md:mr-[8rem] mr-[1rem] ml-[1rem]  md:flex justify-center items-center">
      <div className="text-center w-[100%]">
        <h2 className="text-3xl font-bold mb-6 custom-font">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {skills.map((skill:any, index:any) => (
            <div
              key={index}
              className="p-4 rounded-lg"
              style={{
                width: "100%",
              }}
            >
              <h3 className="text-lg font-medium text-blue-600 mb-2">
                {skill.name}
              </h3>
              <div className="relative h-6 w-full bg-gray-300 rounded-full overflow-hidden">
                <motion.div
                  className="absolute h-full bg-gradient-to-r from-blue-400 to-blue-600 shadow-lg"
                  custom={skill.proficiency}
                  variants={barVariants}
                  initial="hidden"
                  animate="visible"
                  style={{
                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
                  }}
                ></motion.div>
              </div>
              <p className="mt-1 text-sm text-gray-500">
                Proficiency: {skill.proficiency}%
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
