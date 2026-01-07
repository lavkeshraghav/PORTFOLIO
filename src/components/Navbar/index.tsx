import { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaLinkedin,
  FaGithub,
  FaYoutube,
} from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Logo from "../../../public/images/logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const menu = [
    { name: "Home", path: "/" },
    { name: "About", path: "/portfolio/about" },
    { name: "Skills", path: "/portfolio/skills" },
    { name: "Projects", path: "/portfolio/projects" },
    { name: "Blogs", path: "/portfolio/blogs" },
    { name: "Learning", path: "/portfolio/learning" },
  ];

  return (
    <>
      {/* ===== DESKTOP NAVBAR ===== */}
      <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-[#0f172a] via-[#020617] to-[#0f172a] shadow-xl">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            {/* <Image src={Logo} alt="Logo" width={140} height={50} /> */}

            <h1 className=" font-extrabold leading-tight">
              <span className="text-cyan-400">PORTFOLIO</span>
            </h1>
          </Link>

          {/* Menu */}
          <nav className="hidden md:flex bg-[#020617] rounded-full px-6 py-2 gap-6">
            {menu.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`text-sm font-medium transition-all px-4 py-2 rounded-full
                ${
                  router.pathname === item.path
                    ? "bg-blue-600 text-white"
                    : "text-gray-300 hover:text-white hover:bg-blue-500/20"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="hidden md:flex items-center gap-4 text-white">
            <FaLinkedin
              className="cursor-pointer hover:text-blue-400 transition"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/lavkesh-raghav-633427327",
                  "_blank"
                )
              }
            />
            <FaGithub
              className="cursor-pointer hover:text-gray-300 transition"
              onClick={() =>
                window.open(
                  "https://github.com/lavkeshraghav?tab=overview&from=2025-12-01&to=2025-12-31",
                  "_blank"
                )
              }
            />
            <FaYoutube
              className="cursor-pointer hover:text-red-500 transition"
              onClick={() =>
                window.open(
                  "https://youtube.com/@luvraghav?si=pGc_fxhrN7qNykj_",
                  "_blank"
                )
              }
            />
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-white text-2xl"
          >
            <FaBars />
          </button>
        </div>
      </header>

      {/* ===== MOBILE FULLSCREEN MENU ===== */}
      <div
        className={`fixed inset-0 bg-[#020617] z-50 flex flex-col justify-center items-center
        transition-all duration-500 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <button
          onClick={() => setOpen(false)}
          className="absolute top-6 right-6 text-white text-3xl"
        >
          <FaTimes />
        </button>

        <div className="flex flex-col gap-6 text-center">
          {menu.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              onClick={() => setOpen(false)}
              className={`text-2xl font-semibold transition
              ${
                router.pathname === item.path
                  ? "text-blue-500"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="flex gap-6 mt-10 text-white text-xl">
          <FaLinkedin />
          <FaGithub />
          <FaYoutube />
        </div>
      </div>
    </>
  );
};

export default Navbar;
