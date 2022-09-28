import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import {
  FaLinkedinIn,
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaTelegramPlane,
} from "react-icons/fa";

const Header = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex flex-col">
      <div className="fixed flex justify-between z-10 w-full bg-[#1f1f1f] ">
        <ul
          className="flex  float-left lg:p-1.5 pt-2 mt-3 mb-3  lg:pl-14 pl-5 text-gray-200"
          data-aos="fade"
        >
          <a
            href="https://www.linkedin.com/in/anmol-sonkar"
            title="Linkedin"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn className="hover:text-white" />
          </a>

          <a
            href="https://github.com/AnmolSonkar"
            title="Github"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub className="hover:text-white ml-7 " />
          </a>
          <a href="." title="Twitter" target="_blank" rel="noreferrer">
            <FaTwitter className="hover:text-white ml-7 " />
          </a>

          <a
            href="https://www.instagram.com/anmol._.sonkar"
            rel="noreferrer"
            title="Instagram"
            target="_blank"
          >
            <FaInstagram className="hover:text-white ml-7 " />
          </a>
          <a href="." title="Telegram" target="_blank" rel="noreferrer">
            <FaTelegramPlane className="hover:text-white ml-7 " />
          </a>
        </ul>

        <ul
          className="hidden md:flex justify-end p-2 mt-3  pr-10 text-gray-200 text-sm"
          data-aos="fade"
        >
          <li className="hover:text-white pr-7">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-white pr-7">
            <Link to="/Projects">Projects</Link>
          </li>

          <li className="hover:text-white pr-7">
            <Link to="/Resume">Resume</Link>
          </li>
          <li className="hover:text-white pr-7">
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>

        <div
          onClick={handleNav}
          className="block md:hidden text-white p-1.5 pt-1.5 pr-5 mt-3 mb-3"
        >
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <ul
          className={
            nav
              ? "fixed left-0 top-0 w-[60%] h-full text-sm shadow-md bg-[#121212] text-white ease-in-out duration-200"
              : "fixed left-[-100%]"
          }
        >
          <h1 className="text-white border-b-2 pt-3 p-4 font-bold text-lg">
            Menu
          </h1>
          <li>
            <Link to="/">
              <button className="pr-[76%] p-4 mt-5">Home</button>
            </Link>
          </li>
          <li>
            <Link to="/Projects">
              <button className="pr-[71%] p-4">Projects</button>
            </Link>
          </li>

          <li>
            <Link to="/Resume">
              <button className="pr-[71%] p-4">Resume</button>
            </Link>
          </li>
          <li>
            <Link to="/Contact">
              <button className="pr-[72%] p-4">Contact</button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
