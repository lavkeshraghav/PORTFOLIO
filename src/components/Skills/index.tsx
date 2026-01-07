import React from "react";
import { motion } from "framer-motion";
import {
  FaDocker,
  FaAws,
  FaLinux,
  FaGitAlt,
  FaJenkins,
  FaInfinity,
} from "react-icons/fa";
import {
  SiKubernetes,
  SiTerraform,
  SiAnsible,
  SiGithubactions,
} from "react-icons/si";

type Skill = {
  name: string;
  value: number;
  icon: React.ReactNode;
  color: string;
  description: string;
};

const Index = () => {
  const skills: Skill[] = [
    {
      name: "Docker",
      value: 90,
      icon: <FaDocker />,
      color: "#0db7ed",
      description:
        "Containerization of applications using Dockerfiles, images, and Docker Compose for consistent deployments.",
    },
    {
      name: "Kubernetes",
      value: 80,
      icon: <SiKubernetes />,
      color: "#326ce5",
      description:
        "Orchestrating containerized workloads with deployments, services, autoscaling, and cluster management.",
    },
    {
      name: "AWS",
      value: 85,
      icon: <FaAws />,
      color: "#ff9900",
      description:
        "Experience with EC2, S3, IAM, VPC, Load Balancers, and cloud-based scalable infrastructure.",
    },
    {
      name: "Linux",
      value: 95,
      icon: <FaLinux />,
      color: "#facc15",
      description:
        "Strong command-line expertise, server administration, process management, and shell scripting.",
    },
    {
      name: "Git",
      value: 98,
      icon: <FaGitAlt />,
      color: "#f34f29",
      description:
        "Version control with branching strategies, pull requests, code reviews, and release management.",
    },
    {
      name: "Jenkins",
      value: 75,
      icon: <FaJenkins />,
      color: "#d33833",
      description:
        "Automated CI pipelines for build, test, and deployment using Jenkins pipelines and agents.",
    },
    {
      name: "Terraform",
      value: 70,
      icon: <SiTerraform />,
      color: "#7b42bc",
      description:
        "Infrastructure as Code (IaC) to provision and manage cloud resources declaratively.",
    },
    {
      name: "Ansible",
      value: 72,
      icon: <SiAnsible />,
      color: "#ee0000",
      description:
        "Configuration management and automation using playbooks and roles.",
    },
    {
      name: "GitHub Actions",
      value: 78,
      icon: <SiGithubactions />,
      color: "#2088ff",
      description:
        "Automated workflows for CI/CD directly integrated with GitHub repositories.",
    },
    {
      name: "CI/CD Pipeline",
      value: 85,
      icon: <FaInfinity />,
      color: "#22c55e",
      description:
        "End-to-end CI/CD pipelines enabling continuous integration, testing, and automated deployments.",
    },
  ];

  return (
    <section className="mt-[10rem] px-4 md:px-24">
      {/* Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center text-4xl font-extrabold text-[black] mb-4"
      >
        DevOps & Cloud Skills
      </motion.h2>

      <p className="text-center text-gray-400 max-w-3xl mx-auto mb-14 ">
        A comprehensive set of DevOps tools and practices focused on automation,
        scalability, reliability, and continuous delivery of modern
        applications.
      </p>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill, index) => {
          const radius = 50;
          const circumference = 2 * Math.PI * radius;
          const offset = circumference - (skill.value / 100) * circumference;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              whileHover={{ y: -10 }}
              className="bg-[#0f172a] border border-gray-800 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition"
            >
              <div className="flex flex-col items-center text-center">
                <div className="text-5xl mb-4" style={{ color: skill.color }}>
                  {skill.icon}
                </div>

                <h3 className="text-xl font-semibold text-white mb-2">
                  {skill.name}
                </h3>

                <p className="text-sm text-gray-400 mb-6">
                  {skill.description}
                </p>

                {/* Circular Progress */}
                <div className="relative w-[120px] h-[120px]">
                  <svg className="w-full h-full -rotate-90">
                    <circle
                      cx="60"
                      cy="60"
                      r={radius}
                      stroke="#1e293b"
                      strokeWidth="10"
                      fill="transparent"
                    />
                    <motion.circle
                      cx="60"
                      cy="60"
                      r={radius}
                      stroke={skill.color}
                      strokeWidth="10"
                      fill="transparent"
                      strokeDasharray={circumference}
                      strokeDashoffset={circumference}
                      animate={{ strokeDashoffset: offset }}
                      transition={{ duration: 1.4, ease: "easeInOut" }}
                      strokeLinecap="round"
                    />
                  </svg>

                  <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-lg">
                    {skill.value}%
                  </span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Index;
