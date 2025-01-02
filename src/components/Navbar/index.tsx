import { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaLinkedin,
  FaGithub,
  FaYoutube,
} from "react-icons/fa";
import Logo from "../../../public/images/logo.png";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Index = () => {
  const router = useRouter();
  const routeName = router.pathname;

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="shadow-lg  bg-gradient-to-r from-blue-400 to-blue-600 pl-4 pr-4 pt-2 pb-2 w-full z-20 fixed top-0 left-0 right-0">
      <div className="container mx-auto flex justify-between items-center ">
        <div className="text-xl font-bold mb-3 mt-3">
          <Link href="/">
            <Image src={Logo} height={300} width={150} alt="logo" />
          </Link>
        </div>
        <div className="hidden md:flex space-x-6">
          <Link
            href="/"
            className={routeName === "/" ? "activeLink " : "link "}
          >
            Home
          </Link>
          <Link
            href="/portfolio/about"
            className={
              routeName === "/portfolio/about" ? "activeLink " : "link "
            }
          >
            About
          </Link>
          <Link
            href="/portfolio/skills"
            className={routeName === "/portfolio/skills" ? "activeLink " : "link "}
          >
            Skills
          </Link>
          <Link
            href="/portfolio/projects"
            className={routeName === "/portfolio/projects" ? "activeLink " : "link "}
          >
            Projects
          </Link>
          <Link
            href="/portfolio/blogs"
            className={routeName === "/portfolio/blogs" ? "activeLink " : "link "}
          >
            Blogs
          </Link>
          <Link
            href="/portfolio/learning"
            className={routeName === "/portfolio/learning" ? "activeLink " : "link "}
          >
            Learning
          </Link>
        </div>
        <div className="flex justify-between items-center hide-in-mobile ">
          <FaLinkedin
            size={20}
            className="profileIcon"
            onClick={() => {}}
            color="#fff"
            style={{ width: "25px", height: "25px", marginRight: "10px" }}
          />
          <FaGithub
            size={20}
            className="profileIcon"
            onClick={() => {}}
            color="#fff"
            style={{ width: "25px", height: "25px", marginRight: "10px" }}
          />
          <FaYoutube
            size={20}
            className="profileIcon"
            onClick={() => {}}
            color="#fff"
            style={{ width: "25px", height: "25px" }}
          />
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu}>
            <FaBars size={24} />
          </button>
        </div>
      </div>
      <div
        className={`dark-mobile fixed top-0 shadow-lg right-0 bg-[#fff] w-[60%] h-screen transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-500 ease-in-out z-20`}
      >
        <div className="p-4">
          <div className="flex justify-between items-center">
            <FaTimes onClick={toggleMenu} size={24} />
          </div>
          <Link
            href="/"
            className={
              routeName === "/" ? "activeLink block py-2 " : "link block py-2 "
            }
          >
            Home
          </Link>
          <Link href="/link2pay" className="block py-2 hover:text-gray-300 ">
            About
          </Link>
          <Link href="/payment" className="block py-2 hover:text-gray-300 ">
            Skills
          </Link>
          <Link href="/contact-us" className="block py-2 hover:text-gray-300 ">
            Projects
          </Link>
          <Link href="/offer" className="block py-2 hover:text-gray-300 ">
            Blogs
          </Link>
          <Link href="/contact-us" className="block py-2 hover:text-gray-300 ">
            Learning
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Index;
