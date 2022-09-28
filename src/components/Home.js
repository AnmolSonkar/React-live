import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

export default class Home extends Component {
  render() {
    return (
      <div className="flex-grow">
        <Helmet>
          <title>Anmol | Home</title>
        </Helmet>
        <div className="lg:flex py-12 bg-[#121212]  ">
          
          <img
            className="object-cover absolute hidden lg:block  "
            src="/images/Background.jpg"
            alt="Background"
          />
          <img
            className=" w-52 shadow-lg lg:ml-32 mx-auto mt-16 rounded relative  "
            data-aos="zoom-in"
            src="/images/Anmol.jpeg"
            alt="Anmol Sonkar"
          />

          <div
            className="lg:ml-8 lg:mt-16 mt-6 text-[18px] py-2 text-white relative text-center lg:text-left "
            data-aos-delay="400"
            data-aos="fade"
          >
            <p>Hello, my name is</p>
            <h1 className="lg:text-4xl text-3xl pt-1">Anmol Sonkar</h1>
            <p className="lg:pt-1.5 lg:w-10/12 p-2  text-[16px] ">
              I'm a Full Stack Developer, Programmer, Freelancer & Designer
              specialised in frontend and backend development for complex
              scalable web apps. Want to know how I may help your project? Check
              out my
              <Link
                className="hover:underline text-green-500 mr-1 ml-1"
                to="/Projects"
              >
                projects
              </Link>
              and
              <Link
                className="hover:underline text-green-500 ml-1"
                to="/Resume"
              >
                resume
              </Link>
              .
            </p>
            <Link to="/Contact">
              <button className="bg-green-700 shadow-lg focus:outline-none text-[16px] font-medium rounded p-1 mt-6 lg:mt-0 pl-3 pr-3">
                Hire Me
              </button>
            </Link>
          </div>
        </div>

        <div className="lg:mt-[65px] mt-9 relative">
          <h1
            className="text-2xl text-center font-medium lg:text-white text-[#1f1f1f]"
            data-aos="zoom-in"
          >
            Skills Overview
          </h1>
          <p
            className="text-lg lg:text-white mx-auto pt-1.5 lg:w-10/12 lg:pt-5 pr-5 pl-5 lg:pr-0 lg:pl-0   text-gray-800 "
            data-aos="fade-up"
          >
            I have experience building responsive web applications from front to
            back, suited to the user's needs. Below is a quick overview of my
            main technical skill sets and tools I use. Want to find out more
            about my experience?
            <Link className="hover:underline text-green-500 ml-1" to="/Resume">
              Check out my online resume.
            </Link>
          </p>

          <div className="relative grid lg:grid-cols-4 gap-6 mt-10 lg:mt-14 xl:mt-16 w-11/12 mx-auto ">
            <div
              className="rounded shadow-lg bg-[#1E1E1E] "
              data-aos="fade"
              data-aos-delay="100"
            >
              <ul className="pt-6 pl-10 pb-6 text-white text-sm">
                <div className="flex -ml-6">
                  <img
                    src="/images/Frontend.svg"
                    alt=""
                    className=" w-14 py-1 pr-2 "
                  />
                  <li className="text-xl mt-3">Frontend</li>
                </div>

                <div className="flex -ml-2 mt-4">
                  <img
                    src="/images/JS.svg"
                    alt=""
                    className=" w-8 py-1 pr-2 "
                  />
                  <li className="py-2 ml-2">Javascript</li>
                </div>

                <div className="flex -ml-2 py-1 mt-1">
                  <img src="/images/HTML.svg" alt="" className=" w-8 pr-2 " />
                  <li className="py-1 ml-3">Html</li>
                </div>
                <div className="flex -ml-2 py-1 mt-1">
                  <img src="/images/CSS.svg" alt="" className=" w-9 pr-2 " />
                  <li className="py-1 ml-3">CSS</li>
                </div>
              </ul>
            </div>

            <div
              className="rounded shadow-lg bg-[#1E1E1E] "
              data-aos="fade"
              data-aos-delay="250"
            >
              <ul className="pt-6 pl-10 pb-6 text-white text-sm">
                <div className="flex -ml-6">
                  <img
                    src="/images/Frameworks.png"
                    alt=""
                    className=" w-14 pr-2 "
                  />
                  <li className="text-xl mt-3">Frameworks</li>
                </div>
                <div className="flex -ml-3 mt-2">
                  <img
                    src="/images/React.png"
                    alt=""
                    className=" w-10 h-8 mt-1 pr-2 "
                  />
                  <li className="py-2 ml-2">React js</li>
                </div>

                <div className="flex -ml-3 mt-2">
                  <img
                    src="/images/Tailwindcss.svg"
                    alt=""
                    className=" w-10 pr-2 "
                  />
                  <li className="py-2 ml-2">Tailwindcss</li>
                </div>

                <div className="flex -ml-2 py-1 mt-1">
                  <img
                    src="/images/Bootstrap.svg"
                    alt=""
                    className=" w-8 pr-2 "
                  />
                  <li className="py-1 ml-3">Bootstrap5</li>
                </div>
                <div className="flex -ml-3 py-1 mt-1">
                  <img
                    src="/images/LaravelLivewire.png"
                    alt=""
                    className="w-11 pr-2 "
                  />
                  <li className="py-1 ml-1">Laravel Livewire</li>
                </div>
                <div className="flex -ml-2 py-1 mt-1">
                  <img src="/images/Alpinejs.png" alt="" className=" w-7 " />
                  <li className="py-1 ml-4">Alpine.js</li>
                </div>
                <div className="flex -ml-1 py-1 mt-1.5">
                  <img
                    src="/images/Laravel.svg"
                    alt=""
                    className=" w-9 pr-2 "
                  />
                  <li className="py-1 ml-1.5">Laravel</li>
                </div>
              </ul>
            </div>

            <div
              className="rounded shadow-lg bg-[#1E1E1E] "
              data-aos="fade"
              data-aos-delay="400"
            >
              <ul className="pt-6 pl-10 pb-6 text-white text-sm">
                <div className="flex -ml-4 pb-1">
                  <img
                    src="/images/Backend.png"
                    alt=""
                    className=" w-14 pr-2 "
                  />
                  <li className="text-xl mt-3 ml-2">Backend</li>
                </div>
                <div className="flex -ml-2 mt-4">
                  <img
                    src="/images/JS.svg"
                    alt=""
                    className=" w-8 py-1 pr-2 "
                  />
                  <li className="py-2 ml-3">Javascript</li>
                </div>

                <div className="flex -ml-2 py-1 mt-1">
                  <img
                    src="/images/PHP.svg"
                    alt=""
                    className=" w-11 pr-2 py-1 "
                  />
                  <li className="py-1 ml-1">PHP</li>
                </div>
                <div className="flex -ml-2 py-1 mt-1">
                  <img
                    src="/images/Database.svg"
                    alt=""
                    className=" w-9 pr-2 "
                  />
                  <li className="py-1 ml-3">SQL/MySQL</li>
                </div>
              </ul>
            </div>

            <div
              className="rounded shadow-lg bg-[#1E1E1E] "
              data-aos="fade"
              data-aos-delay="550"
            >
              <ul className="pt-6 pl-10 pb-6 text-white text-sm">
                <div className="flex -ml-6">
                  <img src="/images/Other.svg" alt="" className=" w-14 pr-2 " />
                  <li className="text-xl mt-3">Others</li>
                </div>
                <div className="flex -ml-2 mt-1">
                  <img src="/images/GIMP.png" alt="" className=" w-12 pr-2 " />
                  <li className="py-2 ml-2">Photo Editing</li>
                </div>
                <div className="flex -ml-1 py-1">
                  <img
                    src="/images/Kdenlive.png"
                    alt=""
                    className=" w-10 pr-2 "
                  />
                  <li className="py-1 ml-3">Video Editing</li>
                </div>
                <div className="flex -ml-2 py-1">
                  <img
                    src="/images/Audacity.png"
                    alt=""
                    className=" w-10 pr-2 ml-1 "
                  />
                  <li className="py-1 ml-3">Audio Editing</li>
                </div>
              </ul>
            </div>
          </div>
        </div>

        <div className="py-14 mt-10 bg-[#121212] ">
          <img
            className=" lg:w-28 lg:h-28 w-20 h-20 shadow-lg rounded-full mx-auto"
            data-aos="zoom-in"
            src="/images/Anmol.jpeg"
            alt="Anmol Sonkar"
          />

          <div className="lg:ml-8 mx-auto mt-2 text-white text-center">
            <h1
              className="lg:text-3xl text-2xl pt-1 lg:p-1 p-3"
              data-aos="fade"
              data-aos-delay="200"
            >
              Interested in hiring me for your project?
            </h1>
            <p
              className="pt-1.5 lg:w-9/12 p-2 mx-auto"
              data-aos-delay="200"
              data-aos="fade"
            >
              Looking for an experienced full-stack developer to build your web
              app or ship your software product? To start an initial chat, just
              drop me an email at{" "}
              <a
                href="mailto:anmolsonkar742@gmail.com"
                className="hover:underline text-green-500"
              >
                anmolsonkar742@gmail.com
              </a>{" "}
              or visit the{" "}
              <Link to="/Contact" className="hover:underline text-green-500">
                contact page
              </Link>
              .
            </p>
            <Link to="/Contact">
              <button
                data-aos="fade"
                data-aos-delay="200"
                id="click"
                className="bg-green-600 shadow-lg focus:outline-none rounded p-1.5 mt-3"
              >
                Let's Talk
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
