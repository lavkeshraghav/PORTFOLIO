import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import profile from "../../../public/images/lavkesh.jpg";

const Index = () => {
  return (
    <section className="min-h-screen bg-black flex items-center justify-center px-6 md:px-20">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-6xl grid md:grid-cols-2 gap-10 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 shadow-2xl"
      >
        {/* Text Section */}
        <div className="flex flex-col justify-center">
          <motion.h1
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-extrabold text-white leading-tight"
          >
            Hi, I’m{" "}
            <span className="text-blue-500">Lavkesh Kumar Raghav</span>
            <br />
            DevOps Engineer
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-6 text-gray-400 text-lg leading-relaxed"
          >
            I design and deploy scalable cloud infrastructure, automate CI/CD
            pipelines, and build reliable production-grade systems using modern
            DevOps tools and practices.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-4 mt-8"
          >
            <a
              href="https://wa.me/916398139361"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition"
            >
              WhatsApp
            </a>

            <a
              href="/images/Lavkesh.pdf"
              className="px-6 py-3 rounded-xl border border-gray-600 text-gray-300 hover:border-blue-500 hover:text-white transition"
            >
              Download CV
            </a>
          </motion.div>

          {/* Contact Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex gap-6 mt-10 text-2xl text-gray-400"
          >
            <a
              href="https://wa.me/916398139361"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-500 transition"
              title="WhatsApp"
            >
              <FaWhatsapp />
            </a>

            <a
              href="tel:+916398139361"
              className="hover:text-blue-400 transition"
              title="Call"
            >
              <FaPhoneAlt />
            </a>

            <a
              href="mailto:lavkeshraghav190@gmail.com"
              className="hover:text-red-400 transition"
              title="Email"
            >
              <FaEnvelope />
            </a>

            <a
              href="https://github.com/lavkeshraghav?tab=overview&from=2025-12-01&to=2025-12-31"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
              title="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/lavkesh-raghav-633427327"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition"
              title="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </motion.div>
        </div>

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center items-center"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-blue-500 blur-2xl opacity-30" />
            <Image
              src={profile}
              alt="Profile"
              width={320}
              height={320}
              className="relative rounded-full border-4 border-white/10 shadow-xl"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Index;
