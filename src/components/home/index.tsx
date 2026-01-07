import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import profile from "../../../public/images/lavkesh.jpg";
import { Typewriter } from "react-simple-typewriter";

const Index = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#020617] via-[#020617] to-[#020617] text-white flex items-center justify-center px-6">
      <div className="grid md:grid-cols-2 gap-12 max-w-6xl w-full items-center">

        {/* LEFT – DevOps Text */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <span className="text-sm uppercase tracking-widest text-cyan-400">
            DevOps Engineer
          </span>

          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Hi, I’m <span className="text-cyan-400">Lavkesh Kumar Raghav</span>
          </h1>

          <h2 className="text-xl md:text-2xl font-semibold text-gray-300">
            <Typewriter
              words={[
                "CI/CD Pipeline Engineer",
                "Docker & Kubernetes Specialist",
                "AWS & Cloud Automation",
                "Linux & Infrastructure Expert",
                "Monitoring & Security",
              ]}
              loop
              cursor
              cursorStyle="_"
              typeSpeed={90}
              deleteSpeed={50}
              delaySpeed={1200}
            />
          </h2>

          <p className="text-gray-400 leading-relaxed max-w-xl">
            I design, automate, and manage scalable cloud infrastructure.
            From CI/CD pipelines to container orchestration, I focus on
            reliability, performance, and security.
          </p>

          <div className="flex gap-4">
            <motion.button
              whileHover={{ scale: 1.08 }}
              onClick={() => setOpen(true)}
              className="px-6 py-3 bg-cyan-500 text-black font-semibold rounded-md shadow-lg hover:bg-cyan-400"
            >
              View DevOps Stack
            </motion.button>

            <motion.a
              whileHover={{ scale: 1.08 }}
              href="/images/Lavkesh.pdf"
              className="px-6 py-3 border border-cyan-500 text-cyan-400 rounded-md hover:bg-cyan-500 hover:text-black"
            >
              Download CV
            </motion.a>
          </div>
        </motion.div>

        {/* RIGHT – Terminal Card */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="relative"
        >
          <div className="bg-[#020617] border border-cyan-500/30 rounded-xl shadow-2xl p-6">
            <div className="flex gap-2 mb-4">
              <span className="w-3 h-3 bg-red-500 rounded-full"></span>
              <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
            </div>

            <div className="flex items-center gap-4">
              <Image
                src={profile}
                alt="profile"
                width={90}
                height={90}
                className="rounded-lg border border-cyan-500/40"
              />

              <div className="text-sm font-mono text-gray-300">
                <p><span className="text-cyan-400">$</span> whoami</p>
                <p className="ml-4 text-green-400">Lavkesh-Kumar-Raghav</p>

                <p className="mt-2"><span className="text-cyan-400">$</span> skills</p>
                <p className="ml-4 text-green-400">
                  Docker • Kubernetes • AWS • Jenkins • Linux • Git
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-[#020617] border border-cyan-500/30 rounded-xl max-w-3xl w-full p-6 overflow-y-auto max-h-[90vh]"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-cyan-400">
                  DevOps Tech Stack
                </h2>
                <button
                  onClick={() => setOpen(false)}
                  className="text-gray-400 hover:text-white text-xl"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-4 text-gray-300 text-sm leading-relaxed">
                <p>
                  A DevOps tech stack is a set of tools and technologies used
                  to automate, deploy, monitor, and manage applications
                  throughout their lifecycle.
                </p>

                <ul className="space-y-2">
                  <li><b className="text-cyan-400">SCM:</b> Git, GitHub, GitLab</li>
                  <li><b className="text-cyan-400">CI/CD:</b> Jenkins, GitHub Actions, Argo CD</li>
                  <li><b className="text-cyan-400">Config Mgmt:</b> Ansible</li>
                  <li><b className="text-cyan-400">Containers:</b> Docker</li>
                  <li><b className="text-cyan-400">Orchestration:</b> Kubernetes, Helm</li>
                  <li><b className="text-cyan-400">Cloud:</b> AWS, Terraform</li>
                  <li><b className="text-cyan-400">Monitoring:</b> Prometheus, Grafana, Loki</li>
                  <li><b className="text-cyan-400">Observability:</b> OpenTelemetry</li>
                  <li><b className="text-cyan-400">Security:</b> Trivy, SonarQube, Vault</li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Index;
