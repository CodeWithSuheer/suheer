import logo from "../assets/logo.png";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaBlogger } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <nav className="w-full bg-white shadow">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-2">
          <div className="logo">
            <img
              src={logo}
              alt="suheer_logo"
              className="h-[2rem] cursor-pointer sm:h-[2.2rem]"
            />
          </div>

          <div className="social_icons flex items-center justify-center gap-x-3">
            <a
              title="links"
              href="https://www.linkedin.com/in/suheer-zahid"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaLinkedinIn size={18} />
            </a>
            <a
              title="links"
              href="https://github.com/CodeWithSuheer"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaGithub size={18} />
            </a>
            <a
              title="links"
              href="https://codewithsuheer.blogspot.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaBlogger size={18} />
            </a>
            <a
              title="links"
              href="https://www.instagram.com/suheer_100x"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaInstagram size={18} />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
