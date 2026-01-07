import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";

interface Project {
  id: number;
  title: string;
  role: string;
  description: string;
  highlights: string[];
  stack: string[];
  image: string;
  link: string;
}

const Projects = () => {
  const projectList: Project[] = [
    {
      id: 1,
      title: "DevOps Automation & Observability",
      role: "DevOps Engineer",
      description:
        "Automated CI/CD pipelines and implemented full observability for microservices running on AWS EKS to improve deployment reliability, monitoring, and incident response.",
      highlights: [
        "40% reduction in deployment time using Jenkins CI/CD pipelines",
        "30% improvement in application uptime via proactive monitoring",
        "Zero-downtime deployments with rollback strategies",
        "Centralized logging, metrics, and distributed tracing",
      ],
      stack: [
        "Linux",
        "Git",
        "Jenkins",
        "Ansible",
        "Docker",
        "Kubernetes (EKS)",
        "AWS",
        "Helm",
        "Grafana",
        "VictoriaMetrics",
        "Loki",
        "OpenTelemetry",
      ],
      image: "/images/airtel-devops.svg",
      link: "https://github.com/",
    },
  ];

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#020617] text-white pt-28 pb-20 px-6 md:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold">
            Enterprise DevOps Project
          </h1>
          <p className="text-gray-400 mt-4 max-w-3xl mx-auto">
            Real-world DevOps automation and observability implementation for a
            telecom-scale production environment.
          </p>
        </motion.div>

        {/* Project Card */}
        <div className="max-w-5xl mx-auto">
          {projectList.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ scale: 1.03 }}
              className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl hover:shadow-cyan-500/20 transition-all"
            >
              {/* SVG Header */}
              <div className="h-56 flex items-center justify-center bg-gradient-to-br from-cyan-500/10 to-blue-600/10">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-44 h-44"
                />
              </div>

              {/* Content */}
              <div className="p-8">
                <h2 className="text-2xl font-semibold mb-1">
                  {project.title}
                </h2>
                <p className="text-cyan-400 mb-4">{project.role}</p>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Key Achievements */}
                <div className="mb-6">
                  <h3 className="font-semibold mb-3 text-lg">
                    Key Contributions & Achievements
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-300 list-disc list-inside">
                    {project.highlights.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.stack.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-400/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-2 rounded-lg font-medium bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 transition"
                >
                  View Repository
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;
