import React, { Component } from "react";
import { Helmet } from "react-helmet";

import {
  FaLinkedin,
  FaGithub,
  FaDownload,
  FaEnvelope,
  FaMobileAlt,
} from "react-icons/fa";

export default class Resume extends Component {
  render() {
    return (
      <div className=" flex justify-center lg:mb-20 mb-14">
        <Helmet>
          <title>Anmol | Resume</title>
        </Helmet>
        <div className="absolute  flex w-full lg:mx-auto  py-14 mt-11 lg:pb-60  bg-[#121212]">
          <div className="lg:mx-0 mx-auto">
            <h1
              className="text-3xl text-center lg:pl-44 text-white   font-semibold"
              data-aos="fade"
            >
              Resume
            </h1>
            <a
              href="Downloads/Resume.pdf"
              className="lg:hidden text-lg ml-auto lg:pr-44 lg:mt-2  "
            >
              <button
                data-aos="fade"
                className="text-white flex   bg-green-600 shadow-lg lg:mt-0 mt-2  pr-3 focus:outline-none rounded p-1.5 "
              >
                <FaDownload className="pl-1 pr-1 hover:text-white text-[22px]" />
                Download PDF Version
              </button>
            </a>
          </div>
          <a
            href="Downloads/Resume.pdf"
            className="lg:block hidden  ml-auto lg:pr-44 mt-2"
          >
            <button
              data-aos="fade"
              className="text-white flex  bg-green-600 shadow-lg  pr-3 focus:outline-none rounded p-1.5 "
            >
              <FaDownload className="pl-1 pr-1 hover:text-white text-[22px]" />{" "}
              Download PDF Version
            </button>
          </a>
        </div>

        <div
          className="relative flex flex-col lg:mt-48  mt-[250px] w-[92%]   lg:w-9/12 mx-auto rounded shadow-lg bg-[#1e1e1e]"
          data-aos="fade"
        >
          <div className="flex justify-between  ">
            <div className="lg:block hidden">
              <img
                className=" w-52  shadow-lg"
                src="images/Anmol.jpeg"
                alt="Anmol Sonkar"
              />
            </div>

            <div className="mr-auto p-5 ">
              <div className="lg:hidden ">
                <img
                  className="w-36 mx-auto shadow-lg"
                  src="images/Anmol.jpeg"
                  alt="Anmol Sonkar"
                />
              </div>
              <div className="lg:text-left text-center">
                <h1 className="text-white text-3xl lg:mt-0 mt-2 ">
                  Anmol Sonkar
                </h1>
                <p className="text-white text-xl">Full Stack Developer</p>
              </div>
              <div className="mt-3">
                <div className="text-white">
                  <div className="flex">
                    <FaEnvelope className=" hover:text-white text-[22px]" />
                    <span className="pl-2">anmolsonkar742@gmail.com</span>
                  </div>
                </div>
                <div className="text-white lg:mt-2 mt-4">
                  <div className="flex">
                    <FaMobileAlt className=" hover:text-white text-[22px]" />

                    <span className="pl-2">+91 7055877416</span>
                  </div>
                </div>
                <div className="flex text-white lg:mt-2 mt-4 ">
                  <img
                    src="images/Location.png"
                    alt=""
                    className="w-4 mt-1 h-4"
                    aria-hidden="true"
                  />
                  <span className="pl-2 lg:mt-0 mt-1 ">
                    Sitarganj, State - Uttarakhand, Pincode - 262405
                  </span>
                </div>

                <ul className=" lg:hidden  text-white">
                  <div className="flex">
                    <a
                      href="https://www.linkedin.com/in/anmol-sonkar"
                      rel="noreferrer"
                      title="Linkedin"
                      target="_blank"
                    >
                      <li className="flex justify-center text-lg  pt-3 rounded shadow-lg hover:text-white">
                        <FaLinkedin className="hover:text-white text-[23px]" />
                      </li>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/anmol-sonkar"
                      rel="noreferrer"
                      target="_blank"
                      title="Linkedin"
                      className=" text-white hover:underline pt-3 mt-1   my-auto ml-2"
                    >
                      linkedin.com/in/anmol-sonkar
                    </a>
                  </div>

                  <div className="flex mb-3">
                    <a
                      href="https://www.github.com/anmolsonkar"
                      rel="noreferrer"
                      title="Github"
                      target="_blank"
                    >
                      <li className="flex justify-center  pt-4 text-lg rounded shadow-lg hover:text-white">
                        <FaGithub className="hover:text-white text-[23px]" />
                      </li>
                    </a>
                    <a
                      href="https://www.github.com/anmolsonkar"
                      rel="noreferrer"
                      target="_blank"
                      title="Github"
                      className="text-white hover:underline  pt-4   my-auto ml-2"
                    >
                      github.com/anmolsonkar
                    </a>
                  </div>
                </ul>
              </div>
            </div>

            <div className="lg:mr-5">
              <ul className=" hidden lg:block py-4 lg:pl-5 text-white">
                <div className="flex mb-3 mt-2 ">
                  <a
                    href="https://www.linkedin.com/in/anmol-sonkar"
                    rel="noreferrer"
                    title="Linkedin"
                    target="_blank"
                  >
                    <li className="flex justify-center p-2 text-lg rounded shadow-lg hover:text-white">
                      <FaLinkedin className="hover:text-white text-[23px]" />
                    </li>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/anmol-sonkar"
                    rel="noreferrer"
                    target="_blank"
                    title="Linkedin"
                    className=" text-white hover:underline my-auto ml-2"
                  >
                    linkedin.com/in/anmol-sonkar
                  </a>
                </div>

                <div className="flex mb-3">
                  <a
                    href="https://www.github.com/anmolsonkar"
                    rel="noreferrer"
                    title="Github"
                    target="_blank"
                  >
                    <li className="flex justify-center p-2 pt-0 text-lg rounded shadow-lg hover:text-white">
                      <FaGithub className="hover:text-white text-[23px]" />
                    </li>
                  </a>
                  <a
                    href="https://www.github.com/anmolsonkar"
                    rel="noreferrer"
                    target="_blank"
                    title="Github"
                    className="text-white hover:underline my-auto ml-2"
                  >
                    github.com/anmolsonkar
                  </a>
                </div>
              </ul>
            </div>
          </div>

          <div>
            <div className="bg-white lg:p-10 p-5 py-9">
              <h1 className="text-gray-800  text-xl font-medium  border-b border-gray-800 h-10">
                CAREER SUMMARY
              </h1>

              <h1 className="text-gray-800  mt-4">
                A dedicated and personable full stack web developer adept at
                building responsive web applications from front to back.
                Passionate about learning new technologies, bringing ideas to
                life, and working with dedicated teams to build efficient and
                robust applications suited to the user's needs.
              </h1>
            </div>

            <div className="flex lg:-mt-10">
              <div className="lg:p-10 p-5 pt-0 pb-0 py-0 bg-white lg:w-9/12">
                <h1 className="text-gray-800 text-xl font-medium  border-b border-gray-800 h-10">
                  EDUCATION
                </h1>

                <h1 className="text-gray-800 text-lg font-medium mt-4">
                  B.Sc (Hons) Computer Science
                </h1>
                <p className="text-gray-800">
                  Keshav Mahavidyalaya (University of Delhi)
                </p>
                <div className="flex lg:w-9/12">
                  <p className="text-gray-500 text-sm ">2018 - 2021</p>
                  <p className="text-gray-500 text-sm ml-auto mr-4">
                    7.37 CGPA
                  </p>
                </div>

                <h1 className="text-gray-800 text-lg font-medium mt-4">
                  Class XII
                </h1>
                <p className="text-gray-800">
                  Board of School Education Uttarakhand, Uttarakhand
                </p>
                <div className="flex lg:w-8/12">
                  <p className="text-gray-500 text-sm ">2017 - 2018</p>
                  <p className="text-gray-500 text-sm ml-auto">83.4%</p>
                </div>

                <h1 className="text-gray-800 text-lg font-medium mt-4">
                  Class X
                </h1>
                <p className="text-gray-800">
                  Board of School Education Uttarakhand, Uttarakhand
                </p>
                <div className="flex lg:w-8/12">
                  <p className="text-gray-500 text-sm ">2015 - 2016</p>
                  <p className="text-gray-500 text-sm ml-auto">84.2%</p>
                </div>

                <h1 className="text-gray-800 text-xl mt-6 font-medium  border-b border-gray-800 h-10">
                  AWARDS
                </h1>

                <h1 className="text-gray-800 text-lg font-medium mt-4">
                  <i className="fas fa-trophy text-gray-500 "></i>
                  <span className="ml-2">
                    1 <sup>st</sup> Place
                  </span>
                </h1>
                <p className="text-gray-800">
                  Provincial Intellectual Competition and Knowledge Science Fair
                </p>
                <p className="text-gray-800 text-sm">
                  Issued By - Vidya Bharti Akhil Bhartiya Shiksha Sansthan,
                  Uttarakhand
                </p>
                <p className="text-gray-500 text-sm ">Nov 2017</p>

                <h1 className="text-gray-800 text-lg font-medium mt-4">
                  <i className="fas fa-trophy text-gray-500 "></i>
                  <span className="ml-2">
                    3 <sup>rd</sup> Place
                  </span>
                </h1>
                <p className="text-gray-800">
                  Regional Knowledge Science and Intellectual Competition Fair
                </p>
                <p className="text-gray-800 text-sm">
                  Issued By - Vidya Bharti Akhil Bhartiya Shiksha Sansthan,
                  Uttar Pradesh
                </p>
                <p className="text-gray-500 text-sm ">Nov 2017</p>

                <h1 className="text-gray-800 text-xl mt-6 font-medium  border-b border-gray-800 h-10">
                  CERTIFICATES
                </h1>

                <h1 className="text-gray-800 text-lg font-medium mt-4">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.sololearn.com/Certificate/1162-9438124/jpg"
                    className="hover:underline"
                  >
                    Responsive Web Design course
                  </a>
                </h1>
                <p className="text-gray-800">Sololearn</p>
                <p className="text-gray-500 text-sm ">Issued Jun 2021</p>

                <h1 className="text-gray-800 text-lg font-medium mt-4">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.freecodecamp.org/certification/anmolsonkar/responsive-web-design"
                    className="hover:underline"
                  >
                    Responsive Web Design
                  </a>
                </h1>
                <p className="text-gray-800">freeCodeCamp</p>
                <p className="text-gray-500 text-sm ">Issued Sep 2020</p>

                <h1 className="text-gray-800 text-lg font-medium mt-4">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.sololearn.com/Certificate/1051-9438124/pdf/"
                    className="hover:underline"
                  >
                    C++ Tutorial course
                  </a>
                </h1>
                <p className="text-gray-800">Sololearn</p>
                <p className="text-gray-500 text-sm ">Issued Aug 2020</p>

                <h1 className="text-gray-800 text-lg font-medium mt-4">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.sololearn.com/Certificate/1059-9438124/pdf/"
                    className="hover:underline"
                  >
                    PHP Tutorial course
                  </a>
                </h1>
                <p className="text-gray-800">Sololearn</p>
                <p className="text-gray-500 text-sm ">Issued Aug 2020</p>

                <h1 className="text-gray-800 text-lg font-medium mt-4">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.sololearn.com/Certificate/1060-9438124/pdf/"
                    className="hover:underline"
                  >
                    SQL Fundamentals course
                  </a>
                </h1>
                <p className="text-gray-800">Sololearn</p>
                <p className="text-gray-500 text-sm ">Issued Aug 2020</p>

                <h1 className="text-gray-800 text-lg font-medium mt-4">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.sololearn.com/Certificate/1014-9438124/pdf/"
                    className="hover:underline"
                  >
                    HTML Fundamentals course
                  </a>
                </h1>
                <p className="text-gray-800">Sololearn</p>
                <p className="text-gray-500 text-sm ">Issued Aug 2020</p>

                <h1 className="text-gray-800 text-lg font-medium mt-4">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.sololearn.com/Certificate/1023-9438124/pdf/"
                    className="hover:underline"
                  >
                    CSS Fundamentals course
                  </a>
                </h1>
                <p className="text-gray-800">Sololearn</p>
                <p className="text-gray-500 text-sm ">Issued Aug 2020</p>

                <h1 className="text-gray-800 text-lg font-medium mt-4">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://drive.google.com/file/d/1MC0mVNceMwKHDz63EgKxqtrDCSADFX99/view?usp=sharing"
                    className="hover:underline"
                  >
                    Certificate of Participation
                  </a>
                </h1>
                <div className="text-gray-800">
                  Seminar Name - INSPIRE Programme Organized by - Hemwati Nandan
                  Bahuguna Garhwal University, Srinagar (Garhwal), Uttarakhand
                  <p className="text-gray-500 text-sm ">
                    29/01/2017 - 02/02/2017
                  </p>
                </div>

                <div className="lg:hidden lg:p-10 lg:py-0 py-6 bg-white">
                  <h1 className="text-gray-800 text-xl font-medium  border-b border-gray-800 h-10">
                    TECHNICAL SKILLS & TOOLS
                  </h1>

                  <h1 className="text-gray-800 text-lg font-medium mt-4">
                    Frontend
                  </h1>

                  <p className="text-gray-800 text-sm mt-2">Javascript</p>
                  <div className="flex h-3 w-full rounded bg-gray-300">
                    <div className="flex h-3 rounded bg-gray-800 text-gray-800 w-[80%]"></div>
                  </div>

                  <p className="text-gray-800 text-sm mt-2">HTML5</p>
                  <div className="flex h-3 w-full rounded bg-gray-300">
                    <div className="flex h-3 rounded bg-gray-800 text-gray-800 w-[93%]"></div>
                  </div>

                  <p className="text-gray-800 text-sm mt-2">CSS3</p>
                  <div className="flex h-3 w-full rounded bg-gray-300">
                    <div className="flex h-3 rounded bg-gray-800 text-gray-800 w-[93%]"></div>
                  </div>

                  <h1 className="text-gray-800 text-lg font-medium mt-4">
                    Backend
                  </h1>

                  <p className="text-gray-800 text-sm mt-2">C++</p>
                  <div className="flex h-3 w-full rounded bg-gray-300">
                    <div className="flex h-3 rounded bg-gray-800 text-gray-800 w-[75%]"></div>
                  </div>

                  <p className="text-gray-800 text-sm mt-2">PHP</p>
                  <div className="flex h-3 w-full rounded bg-gray-300">
                    <div className="flex h-3 rounded bg-gray-800 text-gray-800 w-[85%]"></div>
                  </div>

                  <p className="text-gray-800 text-sm mt-2">Javascript</p>
                  <div className="flex h-3 w-full rounded bg-gray-300">
                    <div className="flex h-3 rounded bg-gray-800 text-gray-800 w-[80%]"></div>
                  </div>

                  <p className="text-gray-800 text-sm mt-2">SQL</p>
                  <div className="flex h-3 w-full rounded bg-gray-300">
                    <div className="flex h-3 rounded bg-gray-800 text-gray-800 w-[90%]"></div>
                  </div>
                  <p className="text-gray-800 text-sm mt-2">MySQL</p>
                  <div className="flex h-3 w-full rounded bg-gray-300">
                    <div className="flex h-3 rounded bg-gray-800 text-gray-800 w-[90%]"></div>
                  </div>

                  <h1 className="text-gray-800 text-lg font-medium mt-4">
                    Frameworks
                  </h1>
                  <h1 className="text-gray-800 text-sm  mt-2">React.js</h1>
                  <p className="text-gray-500">front-end framework</p>
                  <h1 className="text-gray-800 text-sm  mt-2">Tailwindcss</h1>
                  <p className="text-gray-500">front-end framework</p>
                  <h1 className="text-gray-800 text-sm  mt-2">Bootstrap5</h1>
                  <p className="text-gray-500">front-end framework</p>
                  <h1 className="text-gray-800 text-sm  mt-2">
                    Laravel Livewire
                  </h1>
                  <p className="text-gray-500">full-stack framework</p>
                  <h1 className="text-gray-800 text-sm  mt-2">Alpine.js</h1>
                  <p className="text-gray-500">front-end framework</p>
                  <h1 className="text-gray-800 text-sm   mt-2">Laravel</h1>
                  <p className="text-gray-500">back-end framework</p>

                  <h1 className="text-gray-800 text-lg font-medium mt-4">
                    Tools
                  </h1>

                  <div className="flex">
                    <p className="text-gray-800 text-sm mt-2">
                      Apache , Visual Studio Code , Git and GitHub , GIMP ,
                      Audacity , Kdenlive , Wondershare Filmora , Adobe
                      Photoshop , Microsoft Office
                    </p>
                  </div>

                  <h1 className="text-gray-800 text-xl mt-6 font-medium  border-b border-gray-800 h-10">
                    SOFT SKILLS
                  </h1>

                  <h1 className="text-gray-800 text-sm  mt-4">Communication</h1>
                  <h1 className="text-gray-800 text-sm  mt-2">
                    Problem Solving
                  </h1>
                  <h1 className="text-gray-800 text-sm  mt-2">Creativity</h1>
                  <h1 className="text-gray-800 text-sm  mt-2">Confidence</h1>
                  <h1 className="text-gray-800 text-sm   mt-2">Patience</h1>
                  <h1 className="text-gray-800 text-sm  mt-2">
                    Teamwork and Cooperation
                  </h1>
                  <h1 className="text-gray-800 text-sm  mt-2">
                    Leadership and Time management
                  </h1>

                  <h1 className="text-gray-800 text-xl mt-6 font-medium  border-b border-gray-800 h-10">
                    LANGUAGES
                  </h1>
                  <h1 className="text-gray-800 text-lg  mt-2 font-medium">
                    Hindi
                  </h1>
                  <p className="text-gray-500 text-sm ">Native</p>
                  <h1 className="text-gray-800 text-lg  mt-2 font-medium">
                    Punjabi
                  </h1>
                  <p className="text-gray-500 text-sm ">Fluent</p>
                  <h1 className="text-gray-800 text-lg  mt-2 font-medium">
                    English
                  </h1>
                  <p className="text-gray-500 text-sm ">Proficient</p>

                  <div className="mb-10">
                    <h1 className="text-gray-800 text-xl mt-6 font-medium  border-b border-gray-800 h-10">
                      INTERESTS AND HOBBIES
                    </h1>
                    <h1 className="text-gray-800 text-sm  mt-2">
                      Photo Editing
                    </h1>
                    <h1 className="text-gray-800 text-sm  mt-2">
                      Audio Editing
                    </h1>
                    <h1 className="text-gray-800 text-sm  mt-2">
                      Video Editing
                    </h1>
                    <h1 className="text-gray-800 text-sm  mt-2">
                      Solving a Rubik's cube
                    </h1>
                    <h1 className="text-gray-800 text-sm  mt-2">
                      Listening To Music
                    </h1>
                  </div>
                </div>
              </div>

              <div className="hidden lg:block p-10 bg-white">
                <h1 className="text-gray-800 text-xl font-medium  border-b border-gray-800 h-10">
                  TECHNICAL SKILLS & TOOLS
                </h1>

                <h1 className="text-gray-800 text-lg font-medium mt-4">
                  Frontend
                </h1>

                <p className="text-gray-800 text-sm mt-2">Javascript</p>
                <div className="flex h-3 w-full rounded bg-gray-300">
                  <div className="flex h-3 rounded bg-gray-800 text-gray-800 w-[80%]"></div>
                </div>

                <p className="text-gray-800 text-sm mt-2">HTML5</p>
                <div className="flex h-3 w-full rounded bg-gray-300">
                  <div className="flex h-3 rounded bg-gray-800 text-gray-800 w-[93%]"></div>
                </div>

                <p className="text-gray-800 text-sm mt-2">CSS3</p>
                <div className="flex h-3 w-full rounded bg-gray-300">
                  <div className="flex h-3 rounded bg-gray-800 text-gray-800 w-[93%]"></div>
                </div>

                <h1 className="text-gray-800 text-lg font-medium mt-4">
                  Backend
                </h1>

                <p className="text-gray-800 text-sm mt-2">C++</p>
                <div className="flex h-3 w-full rounded bg-gray-300">
                  <div className="flex h-3 rounded bg-gray-800 text-gray-800 w-[75%]"></div>
                </div>

                <p className="text-gray-800 text-sm mt-2">PHP</p>
                <div className="flex h-3 w-full rounded bg-gray-300">
                  <div className="flex h-3 rounded bg-gray-800 text-gray-800 w-[85%]"></div>
                </div>

                <p className="text-gray-800 text-sm mt-2">Javascript</p>
                <div className="flex h-3 w-full rounded bg-gray-300">
                  <div className="flex h-3 rounded bg-gray-800 text-gray-800 w-[80%]"></div>
                </div>

                <p className="text-gray-800 text-sm mt-2">SQL</p>
                <div className="flex h-3 w-full rounded bg-gray-300">
                  <div className="flex h-3 rounded bg-gray-800 text-gray-800 w-[90%]"></div>
                </div>
                <p className="text-gray-800 text-sm mt-2">MySQL</p>
                <div className="flex h-3 w-full rounded bg-gray-300">
                  <div className="flex h-3 rounded bg-gray-800 text-gray-800 w-[90%]"></div>
                </div>

                <h1 className="text-gray-800 text-lg font-medium mt-4">
                  Frameworks
                </h1>
                <h1 className="text-gray-800 text-sm  mt-2">React.js</h1>
                <p className="text-gray-500">front-end framework</p>
                <h1 className="text-gray-800 text-sm  mt-2">Tailwindcss</h1>
                <p className="text-gray-500">front-end framework</p>
                <h1 className="text-gray-800 text-sm  mt-2">Bootstrap5</h1>
                <p className="text-gray-500">front-end framework</p>
                <h1 className="text-gray-800 text-sm  mt-2">
                  Laravel Livewire
                </h1>
                <p className="text-gray-500">full-stack framework</p>
                <h1 className="text-gray-800 text-sm  mt-2">Alpine.js</h1>
                <p className="text-gray-500">front-end framework</p>
                <h1 className="text-gray-800 text-sm   mt-2">Laravel</h1>
                <p className="text-gray-500">back-end framework</p>

                <h1 className="text-gray-800 text-lg font-medium mt-4">
                  Tools
                </h1>

                <div className="flex">
                  <p className="text-gray-800 text-sm mt-2">
                    Apache , Visual Studio Code , Git and GitHub , GIMP ,
                    Audacity , Kdenlive , Wondershare Filmora , Adobe Photoshop
                    , Microsoft Office
                  </p>
                </div>

                <h1 className="text-gray-800 text-xl mt-6 font-medium  border-b border-gray-800 h-10">
                  SOFT SKILLS
                </h1>

                <h1 className="text-gray-800 text-sm  mt-4">Communication</h1>
                <h1 className="text-gray-800 text-sm  mt-2">Problem Solving</h1>
                <h1 className="text-gray-800 text-sm  mt-2">Creativity</h1>
                <h1 className="text-gray-800 text-sm  mt-2">Confidence</h1>
                <h1 className="text-gray-800 text-sm   mt-2">Patience</h1>
                <h1 className="text-gray-800 text-sm  mt-2">
                  Teamwork and Cooperation
                </h1>
                <h1 className="text-gray-800 text-sm  mt-2">
                  Leadership and Time management
                </h1>

                <h1 className="text-gray-800 text-xl mt-6 font-medium  border-b border-gray-800 h-10">
                  LANGUAGES
                </h1>
                <h1 className="text-gray-800 text-lg  mt-2 font-medium">
                  Hindi
                </h1>
                <p className="text-gray-500 text-sm ">Native</p>
                <h1 className="text-gray-800 text-lg  mt-2 font-medium">
                  Punjabi
                </h1>
                <p className="text-gray-500 text-sm ">Fluent</p>
                <h1 className="text-gray-800 text-lg  mt-2 font-medium">
                  English
                </h1>
                <p className="text-gray-500 text-sm ">Proficient</p>

                <div className="mb-10">
                  <h1 className="text-gray-800 text-xl mt-6 font-medium  border-b border-gray-800 h-10">
                    INTERESTS AND HOBBIES
                  </h1>
                  <h1 className="text-gray-800 text-sm  mt-2">Photo Editing</h1>
                  <h1 className="text-gray-800 text-sm  mt-2">Audio Editing</h1>
                  <h1 className="text-gray-800 text-sm  mt-2">Video Editing</h1>
                  <h1 className="text-gray-800 text-sm  mt-2">
                    Solving a Rubik's cube
                  </h1>
                  <h1 className="text-gray-800 text-sm  mt-2">
                    Listening To Music
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
