import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar/index";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}

const Projects = () => {
  const projectList: Project[] = [
    {
      id: 1,
      title: "News Application",
      description: "This is news application",
      image: "/images/news.jpeg",
      link: "https://1newshindi.com",
    },
    {
      id: 2,
      title: "Studay IT Nepal",
      description: "This it study site",
      image: "/images/ItStudy.jpeg",
      link: "https://1newshindi.com",
    },
    {
      id: 3,
      title: "Mighty Jackpot",
      description: "Mighty Jackpot is a gaming site play win coins",
      image: "/images/jackpot.jpeg",
      link: "https://beamish-salmiakki-520990.netlify.app",
    },
    {
      id: 4,
      title: "Charlina Sweeps",
      description: "Charlina Sweeps is a download betting app store",
      image: "/images/Charlina.jpeg",
      link: "charlinasweeps.co.in",
    },
   
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <Navbar />
      <div className="mt-[6rem] md:mt-[6rem] md:ml-[8rem] md:mr-[8rem] mr-[1rem] ml-[1rem] pb-3">
        <h1 className="text-3xl font-bold text-center mb-8">Projects</h1>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.2 }}
        >
          {projectList.map((project) => (
            <motion.div
              key={project.id}
              className="border rounded-lg shadow-lg p-4 hover:shadow-2xl transition-shadow"
              variants={cardVariants}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <h2 className="text-xl font-semibold mt-4">{project.title}</h2>
              <p className="text-gray-600 mt-2">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-4 text-blue-500 hover:underline"
              >
                View Project
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default Projects;
